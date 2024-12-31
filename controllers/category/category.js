const Category = require("../../models/category/Category");
const multer = require("multer");
const xlsx = require("xlsx");
var fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Determine destination based on file type

    const dest = "uploads/";
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    // Create unique filename with timestamp
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const addCategory = async (req, res) => {
  //console.log(req.file);

  try {
    const category = await Category.create({
      title: req.body.title,
      image: req.file?.filename,
    });
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const editCategories = async (req, res) => {
  // console.log(req?.file);

  try {
    const category = await Category.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        image: req.file?.filename,
      },
      { new: true }
    );
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
  const { id } = req.params;
  console.log(id);

  try {
    await Category.findByIdAndDelete({ _id: id });
    res.status(200).json("success");
  } catch (err) {
    console.log(err);

    return res.status(500).json({ msg: err.message });
  }
};
const AddSubCategory = async (req, res) => {
  console.log(req.files.file[0]?.path);

  try {
    const category = await Category.findOne({ title: req.params.title });
    const { subs } = req.body;

    if (!req.files.file[0]?.path) {
      return res.status(400).send("No file uploaded");
    }

    const results = [];
    const workbook = xlsx.readFile(req.files.file[0]?.path, {
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
    // console.log(jsonData);
    fs.unlinkSync(req.files.file[0]?.path);

    //       // Import data to MongoDB
    if (category && jsonData) {
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
              src: req.body.src,
              results: jsonData,
              images: [
                {
                  title: "Graph 1",
                  image: req?.files?.line
                    ? req?.files?.line[0]?.filename
                    : null,
                },
                {
                  title: "Graph 2",
                  image: req?.files?.image_bar
                    ? req?.files?.image_bar[0]?.filename
                    : null,
                },
                {
                  title: "Graph 3",
                  image: req?.files?.image_pie
                    ? req?.files?.image_pie[0]?.filename
                    : null,
                },
                {
                  title: "Graph 4",
                  image: req?.files?.image_pyramid
                    ? req?.files?.image_pyramid[0]?.filename
                    : null,
                },
              ],

              date: Date.now(),
            },
          },
        },
        {
          new: true,
        }
      );
    }

    return res.status(200).json("success");
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

const getCategoryByTitleAndIdResults = async (req, res) => {
  const { idResults } = req.params;
  try {
    const data = await Category.findOne({
      title: req.params.category,
      subs: { $elemMatch: { id: idResults } },
    });
    const sub = await data?.subs?.filter((x) => x.id == idResults);
    res.status(200).json(sub);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const editSubCategory = async (req, res) => {
  // console.log(req?.body);
  // console.log(req.params.category, req.params.title);

  try {
    const category = await Category.findOne({ title: req.params.category });

    // Import data to MongoDB
    if (category) {
      console.log("laca");

      const res = await Category.findOneAndUpdate(
        {
          title: req.params.category,
          "subs.title": req.params.title,
        },
        {
          $set: {
            "subs.$.title": req.body.name,
            "subs.$.src": req.body.src,
            "subs.$.images": [
              {
                title: "Graphe 1",
                image: req?.files?.line
                  ? req?.files?.line[0]?.filename
                  : req.body?.line,
              },
              {
                title: "Graph 2",
                image: req?.files?.image_bar
                  ? req?.files?.image_bar[0]?.filename
                  : req.body?.bar,
              },
              {
                title: "Graph 3",
                image: req?.files?.image_pie
                  ? req?.files?.image_pie[0]?.filename
                  : req.body?.image_pie,
              },
              {
                title: "Graph 4",
                image: req?.files?.image_pyramid
                  ? req?.files?.image_pyramid[0]?.filename
                  : req.body?.image_pyramid,
              },
            ],
          },
        },
        {
          new: true,
        }
      );
    }
    return res.status(200).json("success");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getCategoryByTitleAndIdResults,
  addCategory,
  deleteCategory,
  getCategories,
  AddSubCategory,
  upload,
  getCategoryByTitle,
  deleteSubCategoryByTitleOfCategory,
  editCategories,
  editSubCategory,
};
