const BaseController = require("./base.controller");

class AssociationController extends BaseController {
  constructor({ AssociationService }) {
    super(AssociationService);
  }
}

module.exports = AssociationController;