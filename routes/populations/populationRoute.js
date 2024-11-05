const express = require("express");
const popController = require("../../controllers/population/populationController");
const router = express.Router();
router.get("/", popController.getPopulations);

module.exports = router;
