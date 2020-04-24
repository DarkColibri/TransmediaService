const BaseBusiness = require("./base.business");

// Heredamos de BASE
class RoleBusiness extends BaseBusiness {
  constructor({ RoleRepository }) {
    // Llamamos al constructor
    super(RoleRepository);
  }
}

module.exports = RoleBusiness;