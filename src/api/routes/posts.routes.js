const { Router } = require("express");

module.exports = function({ PostController }) {
  const router = Router();

  router.get("/", PostController.getAll.bind(PostController));
  router.get("/:id", PostController.get.bind(PostController));
  router.get("/thread/:id", PostController.getThreadsPosts.bind(PostController));
  router.post("/", PostController.create.bind(PostController));
  router.put("/:id", PostController.update.bind(PostController));
  router.delete("/:id", PostController.delete.bind(PostController));
  
  return router;
};