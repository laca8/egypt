const mongoose = require("mongoose");
const kidsSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  residence: {
    type: String,
  },

  السنة: {
    type: String,
  },
  النوع: {
    type: String,
  },
  total: {
    type: Number,
  },
});
module.exports = mongoose.model("childs_death_less_than_28_days", kidsSchema);
