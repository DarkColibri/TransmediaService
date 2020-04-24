const BaseRepository = require('./base.repository');

class AssociationCategoryRepository extends BaseRepository {
  constructor({ db }) {
    // constructor del padre
    super(db, 'associationcategories');
  }
  // Meteremos los métodos que no son crud
}

module.exports = AssociationCategoryRepository