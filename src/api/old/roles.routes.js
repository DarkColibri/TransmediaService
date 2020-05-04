const { Router } = require("express");

module.exports = function({ RoleController }) {
  const router = Router();

  router.get("/", RoleController.getAll.bind(RoleController));
  router.get("/:id", RoleController.get.bind(RoleController));
  router.post("/", RoleController.create.bind(RoleController));
  router.put("/:id", RoleController.update.bind(RoleController));
  router.delete("/:id", RoleController.delete.bind(RoleController));

  return router;
};