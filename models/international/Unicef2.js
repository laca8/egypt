const mongoose = require("mongoose");
const unicef2 = new mongoose.Schema({
  city: {
    type: String,
  },
});
module.exports = mongoose.model("unicef2_data", unicef2);
