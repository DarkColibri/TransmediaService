const BaseBusiness = require("./base.business");

// Heredamos de BASE
class CategoryBusiness extends BaseBusiness {
  constructor({ CategoryRepository }) {
    // Llamamos al constructor
    super(CategoryRepository);
  }
}

module.exports = CategoryBusiness;