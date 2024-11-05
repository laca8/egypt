const Teacher = require("../../../models/edu/Teacher");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.aggregate([
      {
        $group: {
          _id: {
            // المرحلة: "$المرحلة",
            year: "$العام",
            stage: "$المرحلة",
          },

          total_teachers_female: {
            $sum: {
              $toInt: "$اناث",
            },
          },

          total_teachers_male: {
            $sum: {
              $toInt: "$ذكور",
            },
          },
          total_teachers_female_public: {
            $sum: {
              $toInt: "$اناث حكومى",
            },
          },

          total_teachers_female_private: {
            $sum: {
              $toInt: "$اناث خاص",
            },
          },
          total_teachers_male_public: {
            $sum: {
              $toInt: "$ذكور حكومى",
            },
          },

          total_teachers_male_private: {
            $sum: {
              $toInt: "$ذكور خاص",
            },
          },
          total_teachers_female_urban: {
            $sum: {
              $toInt: "$اناث حضر",
            },
          },
          total_teachers_male_urban: {
            $sum: {
              $toInt: "$ذكور حضر",
            },
          },
          total_teachers_female_rural: {
            $sum: {
              $toInt: "$اناث ريف",
            },
          },
          total_teachers_male_rural: {
            $sum: {
              $toInt: "$ذكور ريف",
            },
          },
        },
      },
    ]);

    res.json(teachers);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await Teacher.deleteMany();

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
        const createdData = await Teacher.insertMany(data);
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
  getTeachers,
  importData,
};
