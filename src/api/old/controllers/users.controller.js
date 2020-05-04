const BaseController = require("./base.controller");

class UserController extends BaseController {
  constructor({ UserService }) {
    super(UserService);
  }
}

module.exports = UserController;
