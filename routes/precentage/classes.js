const express = require("express");
const eduController = require("../../controllers/eduController/precentage/classes");
const router = express.Router();
router.get("/", eduController.getClasses);
//router.get("/:city", eduController.getStuByCity);

module.exports = router;
