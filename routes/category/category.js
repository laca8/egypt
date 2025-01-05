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
router
  .route("/:id")
  .delete(categoryController.deleteCategory)
  .put(
    categoryController.upload.single("image"),
    categoryController.editCategories
  );
router
  .route("/sub/:title")
  .put(
    categoryController.upload.fields([
      { name: "file", maxCount: 1 },
      { name: "line", maxCount: 1 },
      { name: "image_bar", maxCount: 1 },
      { name: "image_pie", maxCount: 1 },
      { name: "image_pyramid", maxCount: 1 },
    ]),
    categoryController.AddSubCategory
  )

  .get(categoryController.getCategoryByTitle);
router
  .route("/delete/:category/:id")
  .put(categoryController.deleteSubCategoryByTitleOfCategory);
router
  .route("/:category/:idResults")
  .get(categoryController.getCategoryByTitleAndIdResults);
router.route("/subCategory/:category/:id").put(
  categoryController.upload.fields([
    { name: "line", maxCount: 1 },
    { name: "image_bar", maxCount: 1 },
    { name: "image_pie", maxCount: 1 },
    { name: "image_pyramid", maxCount: 1 },
  ]),

  categoryController.editSubCategory
);
module.exports = router;
