const Unicef = require("../../models/international/Unicef");
const getData = async (req, res) => {
  try {
    const data = await Unicef.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
