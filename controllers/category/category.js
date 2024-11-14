const Category = require("../../models/category/Category");
const multer = require("multer");
const xlsx = require("xlsx");
var fs = require("fs");
const { stringify } = require("csv-stringify");
const json2csv = require("json2csv").parse;
const excelToJson = require("convert-excel-to-json");

const csv = require("csv-parser");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const addCategory = async (req, res) => {
  //console.log(req.file);

  try {
    const category = await Category.create({
      title: req.body.title,
      image: req?.file?.path,
    });
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("success");
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
const editCategory = async (req, res) => {
  console.log(req.file.path);

  try {
    const category = await Category.findOne({ title: req.params.title });
    const { subs } = req.body;
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const results = [];
    const workbook = xlsx.readFile(req.file.path, {
      // Enable full Unicode support for Arabic characters
      codepage: 65001,
      raw: true,
    });

    // Get the first worksheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert worksheet to JSON
    // The defval option ensures empty cells are handled properly
    const jsonData = xlsx.utils.sheet_to_json(worksheet, {
      defval: null,
      raw: false,
    });
    console.log(jsonData.length);
    fs.unlinkSync(req.file.path);

    //       // Import data to MongoDB
    if (category) {
      const res = await Category.findOneAndUpdate(
        {
          title: req.params.title,
        },
        {
          $push: {
            subs: {
              id: Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
                .substr(2, 10),
              title: req.body.title,
              results: jsonData,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    res.status(200).json("success");
    // Create a readable stream for the CSV file
    // fs.createReadStream(req.file.path)
    //   .pipe(
    //     csv({
    //       // Configure CSV parser to handle Arabic content
    //       encoding: "utf-8",
    //       bom: true,
    //       trim: true,
    //       columns: true,
    //     })
    //   )
    //   .on("data", (data) => {
    //     results.push(data);
    //   })
    //   .on("end", async () => {
    //     try {
    //       console.log(results);
    //       fs.unlinkSync(req.file.path);

    //       // Import data to MongoDB
    //       if (category) {
    //         const res = await Category.findOneAndUpdate(
    //           {
    //             title: req.params.title,
    //           },
    //           {
    //             $push: {
    //               subs: {
    //                 id: Math.random()
    //                   .toString(36)
    //                   .replace(/[^a-z]+/g, "")
    //                   .substr(2, 10),
    //                 title: req.body.title,
    //                 results: results,
    //               },
    //             },
    //           },
    //           {
    //             new: true,
    //           }
    //         );
    //       }
    //       res.status(200).json("success");

    //       // Clean up: delete the uploaded file
    //     } catch (error) {
    //       console.log(error);

    //       res.status(500).json({
    //         error: "Import failed",
    //         details: error.message,
    //       });
    //     }
    //   })
    //   .on("error", (error) => {
    //     console.log(error);

    //     res.status(500).json({
    //       error: "CSV parsing failed",
    //       details: error.message,
    //     });
    //   });

    // Clean up: delete uploaded file
  } catch (err) {
    console.log(err);

    return res.status(500).json({ msg: err.message });
  }
};

const getCategoryByTitle = async (req, res) => {
  try {
    const category = await Category.findOne({ title: req.params.title });

    res.status(200).json(category);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
const deleteSubCategoryByTitleOfCategory = async (req, res) => {
  console.log("delete");

  try {
    const category = await Category.findOne({ title: req.params.category });
    console.log(req.params.id, req.params.category);

    if (category) {
      const res = await Category.findOneAndUpdate(
        {
          title: req.params.category,
        },

        { $pull: { subs: { id: req.params.id } } },
        {
          new: true,
        }
      );
    } else {
      console.log("not found");

      res.status(500).json({ msg: "not found" });
    }
    res.status(200).json(category);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  addCategory,
  deleteCategory,
  getCategories,
  editCategory,
  upload,
  getCategoryByTitle,
  deleteSubCategoryByTitleOfCategory,
};
