const BaseService = require("./base.services");

class AssociationCategoryService extends BaseService {
  constructor({ AssociationCategoryBusiness }) {
    super(AssociationCategoryBusiness);
  }
}

module.exports = AssociationCategoryService;