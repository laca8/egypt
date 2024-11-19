const express = require("express");
const connectDB = require("./config/db.js");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: "config/config.env" });
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.use(express.static("client/build"));

//db
connectDB();

//routes
//login
app.use("/api/user", require("./routes/user/user"));

//category
app.use("/api/category", require("./routes/category/category.js"));
//population

//build

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server running");
});
