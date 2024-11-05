const Classes = require("../../../models/edu/precentage/Classes");
const getClasses = async (req, res) => {
  try {
    const classes = await Classes.aggregate([
      {
        $group: {
          _id: {
            city: "$city",
            stage: "$المرحلة",
            year: "$العام",
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
  getClasses,
};
