const express = require("express");
const Controller = require("../../controllers/culture/cinemaController");
const router = express.Router();
router.get("/", Controller.getCinema);
router.post("/", Controller.upload.single("file"), Controller.importData);
router.get("/export/csv", Controller.exportToCsv);

module.exports = router;
