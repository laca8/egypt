const Family = require("../../models/populations/Family");
const getFamilies = async (req, res) => {
  try {
    const familes = await Family.aggregate([
      {
        $group: {
          _id: {
            head: "$head_family",
            city: "$city",
          },
          total_family: {
            $sum: "$total_family",
          },
        },
      },
    ]);

    res.json(familes);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getFamilies,
};
