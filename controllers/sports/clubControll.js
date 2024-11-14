const Club = require("../../models/sport/Club");
var fs = require("fs");
const request = require("request");
const path = require("path");
const mongoXlsx = require("mongo-xlsx");
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const json2csv = require("json2csv").parse;
const csv = require("csv-parser");
const getClubs = async (req, res) => {
  try {
    const club = await Club.aggregate([
      {
        $match: { المحافظه: { $ne: "المحافظه" } },
      },
      {
        $group: {
          _id: {
            اتبعية: "$اتبعية",
            المحافظه: "$المحافظه",
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

    res.json(club);
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
    //     A: "المحافظه",
    //     B: "اتبعية",
    //     C: "العدد",
    //   },
    // });
    // console.log(result["undefined-0"].length);

    // await Club.insertMany(result["undefined-0"]);
    // res.status(201).json({ msg: "upload success" });

    // // Clean up: delete uploaded file
    // fs.unlinkSync(req.file.path);
    const results = [];
    const fileStream = fs.createReadStream(req.file.path, "utf-8");
    const streamData = Buffer.from(req.file.path, "utf-8");
    console.log(streamData);
    fileStream
      .pipe(
        csv({
          // Configure CSV parser to handle Arabic content
          encoding: "utf-8",
          bom: true,
          trim: true,
          columns: true,
        })
      )
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        // Insert all records into MongoDB
        console.log(results);
        await Club.deleteMany();

        const insertedData = await Club.insertMany(results);
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

    const data = await Club.find({});
    //console.log(data);

    // const model = mongoXlsx.buildDynamicModel(data);
    // mongoXlsx.mongoData2Xlsx(
    //   data,
    //   model,
    //   {
    //     fileName: "عدد_الاندية" + Date.now() + ".csv",
    //     path: "./public/sport",
    //   },
    //   function (err, data) {
    //     console.log("File saved at:", data.fileName);
    //     res.status(200).json({ url: data.fileName });
    //     setTimeout(async () => {
    //       if (!fs.existsSync(data.path)) {
    //         console.log("Folder does not exist:", folderPath);
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

    const fields = ["_v", "المحافظه", "اتبعية", "العدد"];
    const csv = "\ufeff" + json2csv(data, { fields });

    // Write to file
    const filename = "cinema" + Date.now() + ".csv";
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
  getClubs,
  importData,
  exportToCsv,
  upload,
};
