const express = require("express");
const momController = require("../../controllers/health/mother_death_place");
const router = express.Router();
router.get("/", momController.getMothers);
router.post("/", momController.upload.single("file"), momController.importData);
router.get("/export/csv", momController.exportToCsv);
module.exports = router;
