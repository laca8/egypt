const express = require("express");
const Controller = require("../../controllers/health/female_rate_death");
const router = express.Router();
router.get("/", Controller.getFemales);

module.exports = router;
