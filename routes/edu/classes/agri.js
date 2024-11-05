const express = require("express");
const eduController = require("../../../controllers/eduController/classes/agriClass");
const router = express.Router();
router.get("/", eduController.getClasses);
router.get("/:city", eduController.getClassesByCity);
router.post("/", eduController.upload.single("file"), eduController.importData);
router.get("/export/csv", eduController.exportToCsv);

module.exports = router;
