const { Router } = require("express");

module.exports = function({ CategoryController }) {
  const router = Router();

  router.get("/", CategoryController.getAll.bind(CategoryController));
  router.get("/:id", CategoryController.get.bind(CategoryController));
  router.post("/", CategoryController.create.bind(CategoryController));
  router.put("/:id", CategoryController.update.bind(CategoryController));
  router.delete("/:id", CategoryController.delete.bind(CategoryController));

  return router;
};