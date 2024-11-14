const TotalPopulation = require("../../models/populations/TotalPopulation");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const json2csv = require("json2csv").parse;
const csv = require("csv-parser");
const getData = async (req, res) => {
  try {
    const students = await TotalPopulation.aggregate([
      {
        $match: { السنة: { $ne: "السنة" } },
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
const getPopCity = async (req, res) => {
  console.log(req.params.city);

  try {
    const students = await TotalPopulation.aggregate([
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
    console.log(req.file.path);

    // const result = excelToJson({
    //   sourceFile: req.file.path,
    //   columnToKey: {
    //     A: "المحافظة",
    //     B: "السنة",
    //     C: "الشهر",
    //     D: "النوع",
    //     E: "العدد",
    //   },
    // });
    // console.log(result["undefined-0"].length);

    // await TotalPopulation.insertMany(result["undefined-0"]);
    // res.status(201).json({ msg: "upload success" });
    // console.log("upload success...");

    // // Clean up: delete uploaded file
    // fs.unlinkSync(req.file.path);
    const results = [];
    const fileStream = fs.createReadStream(req.file.path);

    fileStream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        // Insert all records into MongoDB
        await TotalPopulation.deleteMany();

        const insertedData = await TotalPopulation.insertMany(results);
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

    const data = await TotalPopulation.find({});
    //console.log(data);

    // const model = mongoXlsx.buildDynamicModel(data);
    // mongoXlsx.mongoData2Xlsx(
    //   data,
    //   model,
    //   {
    //     fileName: "عدد_السكان" + Date.now() + ".csv",
    //     path: "./public/population",
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

    const fields = ["_v", "العدد", "النوع", "الشهر", "السنة", "المحافظة"];
    const csv = "\ufeff" + json2csv(data, { fields });

    // Write to file
    const filename = "totalPop" + Date.now() + ".csv";
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
