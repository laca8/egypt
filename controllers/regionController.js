const Region = require("../models/Region.js");
const mongoose = require("mongoose");
const addRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);
    res.json(region);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getRegions = async (req, res) => {
  try {
    const regions = await Region.aggregate([
      {
        $lookup: {
          from: "educations",
          localField: "_id",
          foreignField: "region_id",
          as: "educations",
        },
      },
      {
        $lookup: {
          from: "hosbitals",
          localField: "_id",
          foreignField: "region_id",
          as: "hospitals",
        },
      },
      {
        $lookup: {
          from: "populations",
          localField: "_id",
          foreignField: "region_id",
          as: "populations",
        },
      },
    ]);
    res.json(regions);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getRegionById = async (req, res) => {
  try {
    const region = await Region.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "educations",
          localField: "_id",
          foreignField: "region_id",
          as: "educations",
        },
      },
      {
        $lookup: {
          from: "hosbitals",
          localField: "_id",
          foreignField: "region_id",
          as: "hospitals",
        },
      },
      {
        $lookup: {
          from: "populations",
          localField: "_id",
          foreignField: "region_id",
          as: "populations",
        },
      },
    ]);
    res.json(region);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  addRegion,
  getRegions,
  getRegionById,
};
