const Kids = require("../../models/health/ChildsDeathLessThan28Days");
const getKids = async (req, res) => {
  try {
    const kids = await Kids.aggregate([
      {
        $group: {
          _id: {
            year: "$السنة",
            residence: "$residence",
            sex: "$النوع",
          },
          total: {
            $sum: "$total",
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

const getKidsByCity = async (req, res) => {
  try {
    const kids = await Kids.aggregate([
      {
        $match: {
          المحافظة: req.params.city,
        },
      },
      {
        $group: {
          _id: {
            sex: "$النوع",
          },
          total: {
            $sum: "$total",
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
  getKidsByCity,
};
