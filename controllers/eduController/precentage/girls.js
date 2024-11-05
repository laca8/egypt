const Girls = require("../../../models/edu/precentage/Girls");
const getGirls = async (req, res) => {
  try {
    const girls = await Girls.aggregate([
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

    res.json(girls);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getGirls,
};
