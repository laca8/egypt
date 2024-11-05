const express = require("express");
const popController = require("../../controllers/population/familyController");
const router = express.Router();
router.get("/", popController.getFamilies);

module.exports = router;
