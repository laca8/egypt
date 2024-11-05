const express = require("express");
const eduController = require("../../../controllers/eduController/azhar/primary");
const router = express.Router();
router.get("/", eduController.getStudents);
router.post("/", eduController.upload.single("file"), eduController.importData);
router.get("/export/csv", eduController.exportToCsv);

module.exports = router;
