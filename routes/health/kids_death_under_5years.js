const express = require("express");
const kidsController = require("../../controllers/health/kids_death_under_5years");
const router = express.Router();
router.get("/", kidsController.getKids);
router.post(
  "/",
  kidsController.upload.single("file"),
  kidsController.importData
);
router.get("/export/csv", kidsController.exportToCsv);
module.exports = router;
