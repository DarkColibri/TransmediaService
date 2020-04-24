const BaseBusiness = require("./base.business");

// Heredamos de BASE
class UserBusiness extends BaseBusiness {
  constructor({ UserRepository }) {
    // Llamamos al constructor
    super(UserRepository);
  }
}

module.exports = UserBusiness;