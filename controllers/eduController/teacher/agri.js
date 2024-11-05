const Agri = require("../../../models/edu/teachers/Agri");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const getTeachers = async (req, res) => {
  try {
    const teachers = await Agri.aggregate([
      {
        $group: {
          _id: {
            المديرية: "$المديرية",
            السنة: "$السنة",
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

    res.json(teachers);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getTeachersByCity = async (req, res) => {
  try {
    const teachers = await Agri.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      {
        $group: {
          _id: {
            المديرية: "$المديرية",
            السنة: "$السنة",
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

    res.json(teachers);
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

    await Agri.deleteMany();

    const result = excelToJson({
      sourceFile: req.file.path,
      columnToKey: {
        A: "المديرية",
        B: "السنة",
        C: "النوع",
        D: "العدد",
      },
    });
    console.log(result["undefined-0"].length);

    await Agri.insertMany(result["undefined-0"]);
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

    const data = await Agri.find({});
    //console.log(data);

    const model = mongoXlsx.buildDynamicModel(data);
    mongoXlsx.mongoData2Xlsx(
      data,
      model,
      {
        fileName: "عدد_المدرسين_ثانوي_زراعي" + Date.now() + ".csv",
        path: "./public/edu/teachers",
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
  getTeachers,
  getTeachersByCity,
  importData,
  exportToCsv,
  upload,
};
