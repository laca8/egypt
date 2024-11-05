const express = require("express");
const eduController = require("../../../controllers/eduController/teacher/preprimary");
const router = express.Router();
router.get("/", eduController.getTeachers);
router.get("/:city", eduController.getTeachersByCity);
router.post("/", eduController.upload.single("file"), eduController.importData);
router.get("/export/csv", eduController.exportToCsv);
module.exports = router;
