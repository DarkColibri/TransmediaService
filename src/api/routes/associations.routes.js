const { Router } = require("express");

module.exports = function({ AssociationController }) {
  const router = Router();

  router.get("/", AssociationController.getAll.bind(AssociationController));
  router.get("/:id", AssociationController.get.bind(AssociationController));
  router.post("/", AssociationController.create.bind(AssociationController));
  router.put("/:id", AssociationController.update.bind(AssociationController));
  router.delete("/:id", AssociationController.delete.bind(AssociationController));

  return router;
};