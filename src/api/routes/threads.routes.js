const { Router } = require("express");

module.exports = function({ ThreadController }) {
  const router = Router();

  router.get("/", ThreadController.getAll.bind(ThreadController));
  router.get("/:id", ThreadController.get.bind(ThreadController));
  router.post("/", ThreadController.create.bind(ThreadController));
  router.put("/:id", ThreadController.update.bind(ThreadController));
  router.delete("/:id", ThreadController.delete.bind(ThreadController));

  return router;
};