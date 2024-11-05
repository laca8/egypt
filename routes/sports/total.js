const express = require("express");
const Controller = require("../../controllers/sports/total");
const router = express.Router();
router.get("/", Controller.getTotal);
router.get("/:city", Controller.getTotalByCity);

module.exports = router;
