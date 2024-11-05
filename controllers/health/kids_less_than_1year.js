const Kids = require("../../models/health/KidsDeathLessThan28Days");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const getKids = async (req, res) => {
  try {
    const kids = await Kids.aggregate([
      {
        $group: {
          _id: {
            المحافظة: "$المحافظة",
            السنة: "$السنة",
            الاقامة: "$محل الإقامة",
            النوع: "$النوع",
          },
          العدد: {
            $sum: {
              $convert: {
                input: "$العدد",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json(kids);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getKidsByCity = async (req, res) => {
  try {
    const kids = await Kids.aggregate([
      {
        $match: {
          المحافظة: req.params.city,
        },
      },
      {
        $group: {
          _id: {
            المحافظة: "$المحافظة",
            السنة: "$السنة",
            الاقامة: "$محل الإقامة",
            النوع: "$النوع",
          },
          العدد: {
            $sum: {
              $convert: {
                input: "$العدد",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json(kids);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const importData = async (req, res) => {
  try {
    console.log(req.file.path);

    await Kids.deleteMany();

    const result = excelToJson({
      sourceFile: req.file.path,
      columnToKey: {
        A: "المحافظة",
        B: "محل الإقامة",
        C: "السنة",
        D: "النوع",
        E: "العدد",
      },
    });
    console.log(result["undefined-0"].length);

    await Kids.insertMany(result["undefined-0"]);
    res.status(201).json({ msg: "upload success" });

    // Clean up: delete uploaded file
    fs.unlinkSync(req.file.path);
  } catch (err) {
    console.error(`${err}`);
    res.status(500).json({ msg: err.message });
    //  process.exit(1);
  }
};

const exportToCsv = async (req, res) => {
  try {
    console.log("csv");

    const data = await Kids.find({});
    //console.log(data);

    const model = mongoXlsx.buildDynamicModel(data);
    mongoXlsx.mongoData2Xlsx(
      data,
      model,
      {
        fileName: "وفيات_الاطفال_تحت_سنة" + Date.now() + ".csv",
        path: "./public/health/kids_1year",
      },
      function (err, data) {
        console.log("File saved at:", data.fileName);
        res.status(200).json({ url: data.fileName });
        setTimeout(async () => {
          if (!fs.existsSync(data.path)) {
            console.log("Folder does not exist:", folderPath);
            return;
          }

          const files = fs.readdirSync(data.path);
          // console.log(files);

          files.forEach((f) => {
            console.log(f);

            fs.unlinkSync(data.path + "/" + f);
          });
        }, 600000);
      }
    );
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getKids,
  getKidsByCity,
  importData,
  exportToCsv,
  upload,
};
