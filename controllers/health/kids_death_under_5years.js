const Kids = require("../../models/health/KidsDeathLessThan28Days");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const json2csv = require("json2csv").parse;
const csv = require("csv-parser");
const getKids = async (req, res) => {
  try {
    const kids = await Kids.aggregate([
      {
        $match: { السنة: { $ne: "السنة" } },
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

    const results = [];
    const fileStream = fs.createReadStream(req.file.path);

    fileStream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        // Insert all records into MongoDB
        const insertedData = await Kids.insertMany(results);
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

    const data = await Kids.find({});
    //console.log(data);

    const fields = ["_v", "العدد", "النوع", "محل الإقامة", "السنة", "المحافظة"];
    const csv = "\ufeff" + json2csv(data, { fields });

    // Write to file
    const filename = "data" + Date.now() + ".csv";
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
  getKids,
  getKidsByCity,
  importData,
  exportToCsv,
  upload,
};
