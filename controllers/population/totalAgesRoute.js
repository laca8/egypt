const TotalAges = require("../../models/populations/TotalAges");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const getData = async (req, res) => {
  try {
    const students = await TotalAges.aggregate([
      {
        $group: {
          _id: {
            القسم: "$القسم أو المركز",
            السنة: "$السنة",
            الشهر: "$الشهر",
            النوع: "$النوع",
            الإقامة: "$محل الإقامة",
            فئات: "$فئات عمرية",
          },

          العدد: {
            $sum: {
              $convert: {
                input: "$عدد السكان",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json(students);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getPopCity = async (req, res) => {
  try {
    const students = await TotalAges.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      {
        $group: {
          _id: {
            المحافظة: "$المحافظة",
            القسم: "$القسم أو المركز",
            السنة: "$السنة",
            الشهر: "$الشهر",
            النوع: "$النوع",
            الإقامة: "$محل الإقامة",
            فئات: "$فئات عمرية",
          },

          العدد: {
            $sum: {
              $convert: {
                input: "$عدد السكان",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json(students);
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

    await TotalAges.deleteMany();

    const result = excelToJson({
      sourceFile: req.file.path,
      columnToKey: {
        A: "المحافظة",
        B: "القسم أو المركز",
        C: "محل الإقامة",
        D: "فئات عمرية",
        E: "السنة",
        F: "الشهر",
        G: "النوع",
        H: "عدد السكان",
      },
    });
    console.log(result["undefined-0"].length);

    await TotalAges.insertMany(result["undefined-0"]);
    res.status(201).json({ msg: "upload success" });
    console.log("upload success...");

    // Clean up: delete uploaded file
    fs.unlinkSync(req.file.path);
  } catch (err) {
    //console.error(`${err}`);
    res.status(500).json({ msg: err.message });
    //  process.exit(1);
  }
};

const exportToCsv = async (req, res) => {
  try {
    console.log("csv");

    const data = await TotalAges.find({});
    //console.log(data);

    const model = mongoXlsx.buildDynamicModel(data);
    mongoXlsx.mongoData2Xlsx(
      data,
      model,
      {
        fileName: "الفئات_العمرية" + Date.now() + ".csv",
        path: "./public/population",
      },
      function (err, data) {
        console.log("File saved at:", data.fileName);
        res.status(200).json({ url: data.fileName });
        setTimeout(async () => {
          if (!fs.existsSync(data.path)) {
            console.log("Folder does not exist:");
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
  getData,
  getPopCity,
  importData,
  exportToCsv,
  upload,
};
