const Institutes = require("../../../models/edu/azhar/institutes");
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
    const students = await Institutes.aggregate([
      {
        $match: { العام: { $ne: "العام" } },
      },
      {
        $group: {
          _id: {
            المنطقة: "$المنطقة",

            المرحلة: "$المرحلة",
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

    await Institutes.deleteMany();

    // const result = excelToJson({
    //   sourceFile: req.file.path,
    //   columnToKey: {
    //     A: "المنطقة",
    //     B: "العام",
    //     C: "محل الاقامة",
    //     D: "المرحلة",
    //     E: "العدد",
    //   },
    // });
    // console.log(result["undefined-0"].length);

    // await Institutes.insertMany(result["undefined-0"]);
    // console.log("upload success");
    // res.status(201).json({ msg: "upload success" });

    // // Clean up: delete uploaded file
    // fs.unlinkSync(req.file.path);
    const results = [];
    const fileStream = fs.createReadStream(req.file.path);

    fileStream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        // Insert all records into MongoDB
        const insertedData = await Institutes.insertMany(results);
        console.log(insertedData.length);

        // Clean up: delete the uploaded file
        fs.unlinkSync(req.file.path);

        res.status(200).json({
          message: "CSV imported successfully",
          recordsImported: insertedData.length,
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
    //  process.exit(1);
  }
};

const exportToCsv = async (req, res) => {
  try {
    console.log("csv");

    const data = await Institutes.find({});
    //console.log(data);

    // const model = mongoXlsx.buildDynamicModel(data);
    // mongoXlsx.mongoData2Xlsx(
    //   data,
    //   model,
    //   {
    //     fileName: "عدد_المعاهد_الازهر" + Date.now() + ".csv",
    //     path: "./public/azhar/instutes",
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
    const fields = [
      "_v",
      "العدد",
      "محل الاقامة",
      "المرحلة",

      "العام",
      "المنطقة",
    ];
    const csv = "\ufeff" + json2csv(data, { fields });

    // Write to file
    const filename = "ins" + Date.now() + ".csv";
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
