const express = require("express");
const popController = require("../../controllers/population/totalPopulationController");
const router = express.Router();
router.get("/", popController.getData);
router.get("/:city", popController.getPopCity);
router.post("/", popController.upload.single("file"), popController.importData);
router.get("/export/csv", popController.exportToCsv);

module.exports = router;
