const Council = require("../../models/sport/Council");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const getCouncil = async (req, res) => {
  try {
    const council = await Council.aggregate([
      {
        $match: { النوع: { $ne: "النوع" } },
      },
      {
        $group: {
          _id: {
            النوع: "$النوع",
            المحافظة: "$المحافظة",
            الصالات: "$الصالات",
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

    res.json(council);
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

    await Council.deleteMany();

    const result = excelToJson({
      sourceFile: req.file.path,
      columnToKey: {
        A: "المحافظة",
        B: "الصالات",
        C: "النوع",
        D: "العدد",
      },
    });
    console.log(result["undefined-0"].length);

    await Council.insertMany(result["undefined-0"]);
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

    const data = await Council.find({});
    //console.log(data);

    const model = mongoXlsx.buildDynamicModel(data);
    mongoXlsx.mongoData2Xlsx(
      data,
      model,
      {
        fileName: "عدد_المنشاةات" + Date.now() + ".csv",
        path: "./public/sport",
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
  getCouncil,
  importData,
  exportToCsv,
  upload,
};
