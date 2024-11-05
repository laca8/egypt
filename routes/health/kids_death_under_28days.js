const express = require("express");
const kidsController = require("../../controllers/health/kids_death_less_than_28days");
const router = express.Router();
router.get("/", kidsController.getKids);
router.get("/:city", kidsController.getKidsByCity);
router.post(
  "/",
  kidsController.upload.single("file"),
  kidsController.importData
);
router.get("/export/csv", kidsController.exportToCsv);
module.exports = router;
