const debug = require("debug")("web:src:domain:users.bussines.js");
debug("INICIO");

const BaseBusiness = require("./base.business");
// const { Users } = require("./models");

// Heredamos de BASE
class AssociationBusiness extends BaseBusiness {
  constructor({ AssociationRepository }) {
    // Llamamos al constructor
    super(AssociationRepository);
  }
}

module.exports = AssociationBusiness;