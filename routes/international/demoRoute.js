const express = require("express");
const Controller = require("../../controllers/international/demoController");
const router = express.Router();
router.get("/", Controller.getData);
router.post("/", Controller.importData);

module.exports = router;
