const express = require("express");
const eduController = require("../../../controllers/health/total/health");
const router = express.Router();
router.get("/kids", eduController.getKids);

module.exports = router;
