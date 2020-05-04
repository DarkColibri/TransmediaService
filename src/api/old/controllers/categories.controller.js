const BaseController = require("./base.controller");

class CategoryController extends BaseController {
  constructor({ CategoryService }) {
    super(CategoryService);
  }
}

module.exports = CategoryController;
