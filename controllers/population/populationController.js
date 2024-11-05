const Population = require("../../models/populations/Population");
const getPopulations = async (req, res) => {
  try {
    const populations = await Population.find();

    res.json(populations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getPopulations,
};
