const express = require("express");
const Controller = require("../../controllers/international/unicefController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
