const mongoose = require("mongoose");
const ageGroup18Schema = new mongoose.Schema({
  79405: {
    type: Number,
  },
  age: {
    type: String,
  },
  حضر: {
    type: String,
  },
  ذكور: {
    type: String,
  },
  القاهرة: {
    type: String,
  },
});
module.exports = mongoose.model("age_groups_18", ageGroup18Schema);
