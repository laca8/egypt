const express = require("express");
const popController = require("../../controllers/total/totalDate");
const router = express.Router();
router.get("/", popController.getTotal);
router.post("/", popController.addTotal);
router.delete("/:id", popController.deleteTotal);

module.exports = router;
