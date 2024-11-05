const Kids = require("../../models/health/DeathRateKids");
const getKids = async (req, res) => {
  try {
    const kids = await Kids.aggregate([
      {
        $group: {
          _id: {
            city: "$city",
          },
          death_rate_per_100000: {
            $sum: "$معدل الوفيات النفاسية لكل 100.000 مولود 2018",
          },
          death_rate_new_porn_per_1000: {
            $sum: "$معدل وفيات الاطفال حديثى الولادة لكل 1000 مولود 2018",
          },
          death_rate_under_5years_per_1000: {
            $sum: "$معدل وفيات الاطفال دون الخامسة لكل 1000 طفل 2018",
          },
        },
      },
    ]);

    res.json(kids);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getKids,
};
