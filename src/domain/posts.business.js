const BaseBusiness = require("./base.business");

// Heredamos de BASE
class PostBusiness extends BaseBusiness {
  constructor({ PostRepository }) {
    // Llamamos al constructor
    super(PostRepository);
  }
}

module.exports = PostBusiness;