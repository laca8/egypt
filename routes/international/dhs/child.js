const express = require("express");
const Controller = require("../../../controllers/international/dhs/child");
const router = express.Router();
router.get("/", Controller.getData);
router.post("/", Controller.importData);

module.exports = router;
