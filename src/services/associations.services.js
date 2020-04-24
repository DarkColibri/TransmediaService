const debug = require("debug")("web:src:services:users.services.js");
debug("INICIO");
const BaseService = require("./base.services");

class AssociationService extends BaseService {
  constructor({ AssociationBusiness }) {
    super(AssociationBusiness);
  }
}

module.exports = AssociationService;