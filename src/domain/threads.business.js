const BaseBusiness = require("./base.business");

// Heredamos de BASE
class ThreadBusiness extends BaseBusiness {
  constructor({ ThreadRepository }) {
    // Llamamos al constructor
    super(ThreadRepository);
  }
}

module.exports = ThreadBusiness;