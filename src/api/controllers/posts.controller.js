const BaseController = require("./base.controller");

class PostController extends BaseController {
  constructor({ PostService }) {
    super(PostService);
  }
}

module.exports = PostController;
