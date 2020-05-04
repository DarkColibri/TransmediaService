const BaseController = require("./base.controller");

class RoleController extends BaseController {
  constructor({ RoleService }) {
    super(RoleService);
  }
}

module.exports = RoleController;
