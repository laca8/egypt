const Total = require("../../models/total/TotalDate");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getTotal = async (req, res) => {
  try {
    const populations = await Total.find();

    res.json(populations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const addTotal = async (req, res) => {
  try {
    const populations = await Total.create(req.body);

    res.json(populations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const deleteTotal = async (req, res) => {
  try {
    const populations = await Total.findByIdAndDelete(req.params.id);

    res.json("deleted successed");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getTotal,
  addTotal,
  deleteTotal,
};
