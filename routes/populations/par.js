const express = require("express");
const popController = require("../../controllers/population/popPar");
const router = express.Router();
router.post("/", popController.addCategory);
router.get("/", popController.getCategories);

router.put("/:id", popController.editPar);

module.exports = router;
