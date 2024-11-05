const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
    },
    email: {
      type: String,
      required: [true, "email required"],
    },
    password: {
      type: String,
      required: [true, "password required"],
      minLength: [6, "min length password 6 charcters"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  //3lshan lw hat3ml update email or name not password
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
module.exports = mongoose.model("user", userSchema);
