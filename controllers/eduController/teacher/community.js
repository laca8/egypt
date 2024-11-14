const Community = require("../../../models/edu/teachers/Community");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const csv = require("csv-parser");
const json2csv = require("json2csv").parse;
const getTeachers = async (req, res) => {
  try {
    const teachers = await Community.aggregate([
      {
        $match: { السنة: { $ne: "السنة" } },
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
const getTeachersByCity = async (req, res) => {
  try {
    const teachers = await Community.aggregate([
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

    const results = [];
    const fileStream = fs.createReadStream(req.file.path);

    fileStream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        // Insert all records into MongoDB
        await Community.deleteMany();

        const insertedData = await Community.insertMany(results);
        console.log(insertedData.length);

        // Clean up: delete the uploaded file
        fs.unlinkSync(req.file.path);

        res.status(200).json({
          message: "CSV imported successfully",
          recordsImported: insertedData.length,
        });
      });
  } catch (err) {
    console.error(`${err}`);
    res.status(500).json({ msg: err.message });
    //  process.exit(1);
  }
};

const exportToCsv = async (req, res) => {
  try {
    console.log("csv");

    const data = await Community.find({});
    const fields = ["_v", "المديرية", "السنة", "النوع", "العدد"];
    const opts = { fields };

    const csv = "\ufeff" + json2csv(data, { fields });

    // Write to file
    const filename = "Community" + Date.now() + ".csv";
    fs.writeFileSync(filename, csv, "utf-8");

    // Send file to client
    res.download(filename, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
        res.status(500).send("Error downloading file");
      }
      // Delete file after download
      fs.unlinkSync(filename);
    });
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
