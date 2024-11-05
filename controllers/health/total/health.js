const Kids = require("../../../models/health/KidsDeathLessThanOneYear");
const Kids5 = require("../../../models/health/KidsDeathFrom1YearToLessThan5Year");

const getKids = async (req, res) => {
  try {
    const kidsLess1 = await Kids.aggregate([
      { $match: { السنة: "2020" } },

      {
        $group: {
          _id: {},
          total: {
            $sum: "$وفيات الاطفال الرضع ( أقل من سنة )",
          },
        },
      },
    ]);
    const kidsLess5 = await Kids5.aggregate([
      { $match: { السنة: "2020" } },

      {
        $group: {
          _id: {},
          total: {
            $sum: "$وفيات الاطفال (من سنة - أقل من 5 سنوات)",
          },
        },
      },
    ]);

    res.json({ kidsLess1, kidsLess5 });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getKids,
};
