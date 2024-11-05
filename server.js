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
app.use(
  "/api/population/middle",
  require("./routes/populations/populationMiddleYear")
);
app.use("/api/population/age", require("./routes/populations/ageGroupRoute"));
app.use(
  "/api/population/totalAge",
  require("./routes/populations/totalAgesRoute")
);
app.use(
  "/api/population/total",
  require("./routes/populations/totalPopulationRoute")
);

app.use("/api/population/family", require("./routes/populations/familyRoute"));
//edu/students
app.use("/api/edu/preprimary/stu", require("./routes/edu/preprimarystudents"));
app.use("/api/edu/primary/stu", require("./routes/edu/primaryStudents"));
app.use("/api/edu/secondary/stu", require("./routes/edu/secondaryStudents"));
app.use("/api/edu/private/stu", require("./routes/edu/privateStudents"));
app.use("/api/edu/community/stu", require("./routes/edu/communityStudents"));
app.use("/api/edu/high/stu", require("./routes/edu/highStudent"));
app.use("/api/edu/agri/stu", require("./routes/edu/agrStudents"));
app.use("/api/edu/ind/stu", require("./routes/edu/indStudent"));
app.use("/api/edu/comm/stu", require("./routes/edu/comStudent"));
//edu/classes
app.use(
  "/api/edu/preprimary/class",
  require("./routes/edu/classes/preprimary")
);
app.use("/api/edu/primary/class", require("./routes/edu/classes/primary"));
app.use("/api/edu/secondary/class", require("./routes/edu/classes/secondary"));
app.use("/api/edu/agri/class", require("./routes/edu/classes/agri"));
app.use("/api/edu/ind/class", require("./routes/edu/classes/ind"));
app.use("/api/edu/comm/class", require("./routes/edu/classes/commercial"));
app.use("/api/edu/high/class", require("./routes/edu/classes/high"));
app.use("/api/edu/hotel/class", require("./routes/edu/classes/hotel"));
app.use("/api/edu/community/class", require("./routes/edu/classes/community"));
app.use("/api/edu/special/class", require("./routes/edu/classes/special"));
//school
app.use("/api/edu/agri/school", require("./routes/edu/schools/agri"));
app.use("/api/edu/primary/school", require("./routes/edu/schools/primary"));
app.use(
  "/api/edu/preprimary/school",
  require("./routes/edu/schools/preprimary")
);
app.use("/api/edu/ind/school", require("./routes/edu/schools/ind"));
app.use("/api/edu/comm/school", require("./routes/edu/schools/commercial"));
app.use("/api/edu/high/school", require("./routes/edu/schools/high"));
app.use("/api/edu/hotel/school", require("./routes/edu/schools/hotel"));
app.use("/api/edu/secondary/school", require("./routes/edu/schools/secondary"));
app.use("/api/edu/community/school", require("./routes/edu/schools/community"));
app.use("/api/edu/special/school", require("./routes/edu/schools/special"));
//edu/teachers
app.use(
  "/api/edu/preprimary/teacher",
  require("./routes/edu/teacher/preprimary.js")
);
app.use("/api/edu/primary/teacher", require("./routes/edu/teacher/primary.js"));
app.use("/api/edu/hotel/teacher", require("./routes/edu/teacher/hotel.js"));
app.use(
  "/api/edu/secondary/teacher",
  require("./routes/edu/teacher/secondary.js")
);
app.use("/api/edu/private/teacher", require("./routes/edu/teacher/special.js"));
app.use(
  "/api/edu/community/teacher",
  require("./routes/edu/teacher/community.js")
);
app.use("/api/edu/high/teacher", require("./routes/edu/teacher/high.js"));
app.use("/api/edu/agri/teacher", require("./routes/edu/teacher/agri.js"));
app.use("/api/edu/ind/teacher", require("./routes/edu/teacher/indus.js"));
app.use("/api/edu/comm/teacher", require("./routes/edu/teacher/commerical.js"));
//azhar
app.use("/api/edu/azhar/primary", require("./routes/edu/azhar/primary"));
app.use("/api/edu/azhar/secondary", require("./routes/edu/azhar/secondary"));
app.use("/api/edu/azhar/high", require("./routes/edu/azhar/high"));
app.use("/api/edu/azhar/classes", require("./routes/edu/azhar/classes"));
app.use("/api/edu/azhar/disabled", require("./routes/edu/azhar/disabled"));
app.use("/api/edu/azhar/inds", require("./routes/edu/azhar/institude"));
app.use("/api/edu/azhar/kids", require("./routes/edu/azhar/kids"));
app.use("/api/edu/azhar/reads", require("./routes/edu/azhar/reads"));
app.use("/api/edu/azhar/teachers", require("./routes/edu/azhar/teacher"));
//teachers
app.use("/api/edu/total/teachers", require("./routes/edu/teacher/teacher"));
//edu/precentage
app.use("/api/edu/precentage/girls", require("./routes/precentage/girls"));
app.use("/api/edu/precentage/classes", require("./routes/precentage/classes"));
app.use("/api/edu/precentage/schools", require("./routes/precentage/schools"));
app.use(
  "/api/edu/precentage/teachers",
  require("./routes/precentage/teachers")
);
//culture
app.use("/api/culture/cinema", require("./routes/culture/cinemaRoute"));
app.use("/api/culture/theater", require("./routes/culture/theaterRoute"));
//health
app.use(
  "/api/health/death/mother-place",
  require("./routes/health/mother_death_place")
);
app.use(
  "/api/health/death/mother-residence",
  require("./routes/health/mother_death_residence")
);
app.use(
  "/api/health/death/kids/under28",
  require("./routes/health/kids_death_under_28days")
);
app.use(
  "/api/health/death/childs/under28",
  require("./routes/health/childs_death_under_28days")
);
app.use(
  "/api/health/death/kids/under5years",
  require("./routes/health/kids_death_under_5years")
);
app.use(
  "/api/health/death/kids/under1years",
  require("./routes/health/kide_less_than_1year")
);
app.use(
  "/api/health/death/kids/under7days",
  require("./routes/health/kids_death_under_7days")
);
app.use(
  "/api/health/death/kids/from1to5years",
  require("./routes/health/kids_death_from_1year_to_5years")
);

app.use(
  "/api/health/death/kids/rate",
  require("./routes/health/kids_rate_death")
);
app.use(
  "/api/health/death/female/rate",
  require("./routes/health/females_rate")
);
//international
app.use(
  "/api/international/unicef",
  require("./routes/international/unicefRoute")
);
app.use(
  "/api/international/unicef2",
  require("./routes/international/unicef2Route")
);
app.use(
  "/api/international/unicef/demography",
  require("./routes/international/demoRoute")
);
app.use(
  "/api/international/unicef/education",
  require("./routes/international/eduRoute")
);
app.use(
  "/api/international/unicef/economic",
  require("./routes/international/ecoRoute")
);
app.use(
  "/api/international/unicef/gender",
  require("./routes/international/genderRoute")
);
app.use(
  "/api/international/dhs/child",
  require("./routes/international/dhs/child")
);
app.use(
  "/api/international/dhs/woman",
  require("./routes/international/dhs/woman")
);
app.use(
  "/api/international/dhs/fgm",
  require("./routes/international/dhs/fgm")
);
app.use(
  "/api/international/dhs/physical",
  require("./routes/international/dhs/physical")
);
app.use(
  "/api/international/world/bank",
  require("./routes/international/world/bankRoute")
);
app.use("/api/international/un", require("./routes/international/un/unRoute"));
//sports
app.use("/api/sports/clubs", require("./routes/sports/club"));
app.use("/api/sports/council", require("./routes/sports/council"));
//total/edu
app.use("/api/edu/total", require("./routes/edu/total/total"));
app.use("/api/azhar/total", require("./routes/edu/total/totalAzhar"));
//total/health
app.use("/api/health/total", require("./routes/health/total/health"));
//total/ages
app.use("/api/total/ages", require("./routes/total/totalRoute"));
//total/date
app.use("/api/total/date", require("./routes/total/totalDate"));
//total/sports
app.use("/api/total/sport", require("./routes/sports/total"));
//par pop
app.use("/api/pop/par", require("./routes/populations/par.js"));
//area
app.use("/api/area", require("./routes/populations/area.js"));

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
