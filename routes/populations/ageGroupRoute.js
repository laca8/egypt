const express = require("express");
const popController = require("../../controllers/population/ageGroup");
const router = express.Router();
router.get("/", popController.getPopulations);

router.get("/:city", popController.getPopulationsByCity);

module.exports = router;
