
const BaseBusiness = require("./base.business");

// Heredamos de BASE
class AssociationCategoryBusiness extends BaseBusiness {
  constructor({ AssociationCategoryRepository }) {
    // Llamamos al constructor
    super(AssociationCategoryRepository);
  }
}

module.exports = AssociationCategoryBusiness;