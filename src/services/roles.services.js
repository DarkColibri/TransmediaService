const BaseService = require("./base.services");

class RoleService extends BaseService {
  constructor({ RoleBusiness }) {
    super(RoleBusiness);
  }
}

module.exports = RoleService;