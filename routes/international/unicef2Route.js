const express = require("express");
const Controller = require("../../controllers/international/unicef2Controller");
const router = express.Router();
router.get("/", Controller.getData);
router.post("/", Controller.importData);

module.exports = router;
