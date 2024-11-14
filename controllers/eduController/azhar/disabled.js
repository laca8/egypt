const Disabled = require("../../../models/edu/azhar/Disabled");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const json2csv = require("json2csv").parse;
const csv = require("csv-parser");

const getStudents = async (req, res) => {
  try {
    const students = await Disabled.aggregate([
      {
        $match: { العام: { $ne: "العام" } },
      },
      {
        $group: {
          _id: {
            المنطقة: "$المنطقة",
            النوع: "$النوع",
            المرحلة: "$المرحلة",
            الاعاقة: "$الاعاقة",
            الاقامة: "$محل الاقامة",
            العام: "$العام",
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
    console.log(req.file.path);

    const results = [];
    const fileStream = fs.createReadStream(req.file.path);

    fileStream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        // Insert all records into MongoDB
        await Disabled.deleteMany();

        const insertedData = await Disabled.insertMany(results);
        console.log(insertedData.length);

        // Clean up: delete the uploaded file
        fs.unlinkSync(req.file.path);

        res.status(200).json({
          message: "CSV imported successfully",
          recordsImported: insertedData.length,
        });
      });
  } catch (err) {
    //console.error(`${err}`);
    res.status(500).json({ msg: err.message });
    //  process.exit(1);
  }
};

const exportToCsv = async (req, res) => {
  try {
    console.log("csv");

    const data = await Disabled.find({});
    //console.log(data);

    // const model = mongoXlsx.buildDynamicModel(data);
    // mongoXlsx.mongoData2Xlsx(
    //   data,
    //   model,
    //   {
    //     fileName: "عدد_الطلاب_ذو_الاعاقة" + Date.now() + ".csv",
    //     path: "./public/azhar/disabled",
    //   },
    //   function (err, data) {
    //     console.log("File saved at:", data.fileName);
    //     res.status(200).json({ url: data.fileName });
    //     setTimeout(async () => {
    //       if (!fs.existsSync(data.path)) {
    //         console.log("Folder does not exist:");
    //         return;
    //       }

    //       const files = fs.readdirSync(data.path);
    //       // console.log(files);

    //       files.forEach((f) => {
    //         console.log(f);

    //         fs.unlinkSync(data.path + "/" + f);
    //       });
    //     }, 600000);
    //   }
    // );

    // mongoXlsx.mongoData2Xlsx(
    //   data,
    //   model,
    //   {
    //     fileName: "data" + ".csv",
    //     path: "./client/csv/azhar",
    //   },
    //   function (err, data) {
    //     console.log(data);
    //     console.log("File saved at:", `${data.fileName}`);
    //     console.log(data);

    //     res.status(200).json({ url: `${data.path}/${data.fileName}` });
    //     setTimeout(async () => {
    //       if (!fs.existsSync(data.path)) {
    //         console.log("Folder does not exist:");
    //         return;
    //       }
    //       const files = fs.readdirSync(data.path);
    //       // console.log(files);
    //       files.forEach((f) => {
    //         console.log(f);
    //         fs.unlinkSync(data.path + "/" + f);
    //       });
    //     }, 600000);
    //   }
    // );
    const fields = [
      "_v",
      "العدد",
      "محل الاقامة",
      "المرحلة",
      "النوع",
      "العام",
      "المنطقة",
    ];
    const opts = { fields };

    const csv = "\ufeff" + json2csv(data, { fields });

    // Write to file
    const filename = "disables" + Date.now() + ".csv";
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
  getStudents,
  importData,
  upload,
  exportToCsv,
};
