const express = require("express");
const eduController = require("../../../controllers/eduController/schools/secondary");
const router = express.Router();
router.get("/", eduController.getSchools);
router.get("/:city", eduController.getSchoolsByCity);
router.post("/", eduController.upload.single("file"), eduController.importData);
router.get("/export/csv", eduController.exportToCsv);

module.exports = router;
