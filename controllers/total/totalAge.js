const Total = require("../../models/total/TotalAges");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getTotal = async (req, res) => {
  try {
    const populations = await Total.aggregate([
      {
        $group: {
          _id: {
            sex: "$sex",
            age: "$age",
          },

          pre: {
            $sum: "$pre",
          },
        },
      },
    ]);

    res.json(populations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getTotalByCity = async (req, res) => {
  try {
    const populations = await Total.aggregate([
      {
        $match: { city: req.params.city },
      },
    ]);

    res.json(populations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getTotal,
  getTotalByCity,
};
