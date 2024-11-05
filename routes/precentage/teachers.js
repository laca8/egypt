const express = require("express");
const eduController = require("../../controllers/eduController/precentage/teachers");
const router = express.Router();
router.get("/", eduController.getTeachers);
//router.get("/:city", eduController.getStuByCity);

module.exports = router;
