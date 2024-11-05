const AgeGroup = require("../../models/populations/AgeGroup18");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getPopulations = async (req, res) => {
  try {
    const populations = await AgeGroup.aggregate([
      {
        $group: {
          _id: {
            Sex: "$ذكور",
            Urban: "$حضر",
            age: "$age",
          },
          total: {
            $sum: "$79405",
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

const getPopulationsByCity = async (req, res) => {
  try {
    const populations = await AgeGroup.aggregate([
      {
        $match: { القاهرة: req.params.city },
      },
      {
        $group: {
          _id: {
            Sex: "$ذكور",
            Urban: "$حضر",
            age: "$age",
          },
          total: {
            $sum: "$79405",
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
const getPopulationsAll = async (req, res) => {
  try {
    const populations = await AgeGroup.aggregate([
      {
        $group: {
          _id: {
            Sex: "$ذكور",
            Urban: "$حضر",
            age: "$age",
          },
          total: {
            $sum: "$79405",
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

const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await AgeGroup.deleteMany();

    request(
      {
        url: json,
        json: true,
      },
      async (err, res, data) => {
        if (err) {
          console.log(err);
          //res.send({ msg: err.message });
        }
        //console.log(data);
        const createdData = await AgeGroup.insertMany(data);
        //res.send("data imported");
      }
    );
    res.json("Data Imported");

    //console.log("Data Imported");
  } catch (err) {
    //console.error(`${err}`);
    res.json({ msg: err.message });
    process.exit(1);
  }
};
module.exports = {
  getPopulations,
  getPopulationsByCity,
  getPopulationsAll,
  importData,
};
