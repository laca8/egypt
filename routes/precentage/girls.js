const express = require("express");
const eduController = require("../../controllers/eduController/precentage/girls");
const router = express.Router();
router.get("/", eduController.getGirls);
//router.get("/:city", eduController.getStuByCity);

module.exports = router;
