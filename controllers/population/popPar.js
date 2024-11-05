const PopPargarph = require("../../models/populations/PopPargarph");

const addCategory = async (req, res) => {
  //console.log(req.file);

  try {
    const category = await PopPargarph.create({
      par1: req.body.par1,
      par2: req.body.par2,
    });
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await PopPargarph.find({});
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const editPar = async (req, res) => {
  try {
    const par = await PopPargarph.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(par);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addCategory,
  getCategories,
  editPar,
};
