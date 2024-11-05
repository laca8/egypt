const express = require("express");
const Controller = require("../../controllers/sports/councilControll");
const router = express.Router();
router.get("/", Controller.getCouncil);
router.post("/", Controller.upload.single("file"), Controller.importData);
router.get("/export/csv", Controller.exportToCsv);

module.exports = router;
