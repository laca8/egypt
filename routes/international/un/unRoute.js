const express = require("express");
const Controller = require("../../../controllers/international/un/unController");
const router = express.Router();
router.get("/", Controller.getData);
router.post("/", Controller.importData);

module.exports = router;
