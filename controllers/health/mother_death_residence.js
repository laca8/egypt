const Mother = require("../../models/health/MothersDeath");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const getMothers = async (req, res) => {
  try {
    const mothers = await Mother.aggregate([
      {
        $match: { السنة: { $ne: "السنة" } },
      },
      {
        $group: {
          _id: {
            السنة: "$السنة",
            المحافظة: "$المحافظة",
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

    res.json(mothers);
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

    await Mother.deleteMany();

    const result = excelToJson({
      sourceFile: req.file.path,
      columnToKey: {
        A: "المحافظة",
        B: "السنة",
        C: "العدد",
      },
    });
    console.log(result["undefined-0"].length);

    await Mother.insertMany(result["undefined-0"]);
    res.status(201).json({ msg: "upload success" });

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

    const data = await Mother.find({});
    //console.log(data);

    const model = mongoXlsx.buildDynamicModel(data);
    mongoXlsx.mongoData2Xlsx(
      data,
      model,
      {
        fileName: "وفيات_الامهات_طبقا_لمحل_الوفاة" + Date.now() + ".csv",
        path: "./public/health/mother-residence",
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
  getMothers,
  importData,
  exportToCsv,
  upload,
};
