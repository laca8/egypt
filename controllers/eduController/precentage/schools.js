const Classes = require("../../../models/edu/precentage/Schools");
const getSchools = async (req, res) => {
  try {
    const classes = await Classes.aggregate([
      {
        $group: {
          _id: {
            stage: "$المرحلة",
            year: "$العام",
            city: "$city",
          },

          total_avg: {
            $sum: "$precentage",
          },
        },
      },
    ]);

    res.json(classes);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getSchools,
};
