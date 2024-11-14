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
  .put(
    categoryController.upload.single("file"),
    categoryController.editCategory
  )

  .get(categoryController.getCategoryByTitle);
router
  .route("/delete/:category/:id")
  .put(categoryController.deleteSubCategoryByTitleOfCategory);

module.exports = router;
