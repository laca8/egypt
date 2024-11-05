const express = require("express");
const eduController = require("../../../controllers/eduController/teacher/teacher");
const router = express.Router();
router.get("/", eduController.getTeachers);

module.exports = router;
