const BaseService = require("./base.services");

class UserService extends BaseService {
  constructor({ UserBusiness }) {
    super(UserBusiness);
  }
}

module.exports = UserService;