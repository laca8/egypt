const express = require("express");
const categoryController = require("../../controllers/category/category");
const router = express.Router();
router
  .route("/")
  .post(
    categoryController.upload.single("image"),
    categoryController.addCategory
  )
  .get(categoryController.getCategories);
router.route("/:id").delete(categoryController.deleteCategory);
router
  .route("/:title")
  .put(categoryController.editCategory)
  .get(categoryController.getCategoryByTitle);
module.exports = router;
