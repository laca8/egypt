const express = require("express");
const eduController = require("../../controllers/eduController/precentage/schools");
const router = express.Router();
router.get("/", eduController.getSchools);
//router.get("/:city", eduController.getStuByCity);

module.exports = router;
