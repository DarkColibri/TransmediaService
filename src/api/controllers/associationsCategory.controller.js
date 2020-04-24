const BaseController = require("./base.controller");

class AssociationCategoryController extends BaseController {
  constructor({ AssociationCategoryService }) {
    super(AssociationCategoryService);
  }
}

module.exports = AssociationCategoryController;