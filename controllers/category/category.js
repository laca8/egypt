const Category = require("../../models/category/Category");
const multer = require("multer");
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
      image: req?.file?.filename,
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
module.exports = {
  addCategory,
  deleteCategory,
  getCategories,
  upload,
};
