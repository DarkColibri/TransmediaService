const debug = require("debug")("web:src:api:routes:base.services.js");

const { Router } = require("express");

module.exports = function({ AssociationCategoryController }) {
  const router = Router();

  // debug('ENTRA BIEN');
  router.get("/", AssociationCategoryController.getAll.bind(AssociationCategoryController));
  router.get("/:id", AssociationCategoryController.get.bind(AssociationCategoryController));
  router.post("/", AssociationCategoryController.create.bind(AssociationCategoryController));
  router.put("/:id", AssociationCategoryController.update.bind(AssociationCategoryController));
  router.delete("/:id", AssociationCategoryController.delete.bind(AssociationCategoryController));

  return router;
};