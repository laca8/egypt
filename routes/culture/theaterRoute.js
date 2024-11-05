const express = require("express");
const Controller = require("../../controllers/culture/theaterController");
const router = express.Router();
router.get("/", Controller.getTheater);
router.post("/", Controller.upload.single("file"), Controller.importData);
router.get("/export/csv", Controller.exportToCsv);

module.exports = router;
