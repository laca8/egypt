const mongoose = require("mongoose");
const popPar = new mongoose.Schema(
  {
    par1: {
      type: String,
    },
    par2: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("popPar", popPar);
