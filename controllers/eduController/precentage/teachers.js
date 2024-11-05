const Teachers = require("../../../models/edu/precentage/Teachers");
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teachers.aggregate([
      {
        $group: {
          _id: {
            stage: "$المرحلة",
            year: "$العام",
            city: "$city",
          },

          total_avg: {
            $sum: {
              $toInt: "$precentage",
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

module.exports = {
  getTeachers,
};
