const express = require("express");
const Controller = require("../../controllers/health/kids_rate_death");
const router = express.Router();
router.get("/", Controller.getKids);

module.exports = router;
