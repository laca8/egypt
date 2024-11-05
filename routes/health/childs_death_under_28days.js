const express = require("express");
const kidsController = require("../../controllers/health/childs_death_less_than_28years");
const router = express.Router();
router.get("/", kidsController.getKids);
router.get("/:city", kidsController.getKidsByCity);

module.exports = router;
