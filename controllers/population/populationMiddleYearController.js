const PopulationMiddle = require("../../models/populations/PopulationMiddleYear");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const json2csv = require("json2csv").parse;
const csv = require("csv-parser");
const iconv = require("iconv-lite");
const getData = async (req, res) => {
  try {
    const students = await PopulationMiddle.aggregate([
      {
        $match: { السنة: { $ne: "السنة" } },
      },
      {
        $group: {
          _id: {
            المحافظة: "$المحافظة",
            السنة: "$السنة",
            الشهر: "$الشهر",
            "محل الإقامة": "$محل الإقامة",
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

    res.json(students);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getPopCity = async (req, res) => {
  console.log(req.params.city);
  try {
    const students = await PopulationMiddle.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      {
        $group: {
          _id: {
            المحافظة: "$المحافظة",
            السنة: "$السنة",
            الشهر: "$الشهر",
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
    console.log("csv  middle");
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const results = [];

    // Create a readable stream for the CSV file
    fs.createReadStream(req.file.path)
      .pipe(
        csv({
          // Configure CSV parser to handle Arabic content
          encoding: "utf-8",
          bom: true,
          trim: true,
          columns: true,
        })
      )
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", async () => {
        try {
          console.log(results);

          // Import data to MongoDB
          await PopulationMiddle.deleteMany();
          await PopulationMiddle.insertMany(results);

          // Clean up: delete the uploaded file
          fs.unlinkSync(req.file.path);

          res.status(200).json({
            message: "Import successful",
            recordsImported: results.length,
          });
        } catch (error) {
          console.log(error);

          res.status(500).json({
            error: "Import failed",
            details: error.message,
          });
        }
      })
      .on("error", (error) => {
        console.log(error);

        res.status(500).json({
          error: "CSV parsing failed",
          details: error.message,
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

    const data = await PopulationMiddle.find({});
    const fields = ["العدد", "محل الإقامة", "الشهر", "السنة", "المحافظة"];
    const csv = "\ufeff" + json2csv(data, { fields });

    // Write to file
    const filename = "middlePop" + Date.now() + ".csv";
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
  getData,
  getPopCity,
  importData,
  exportToCsv,
  upload,
};
