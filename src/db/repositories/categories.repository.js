const BaseRepository = require('./base.repository');

class CategoryRepository extends BaseRepository {
  constructor({ db }) {
    // constructor del padre
    super(db, 'categories');
  }
  // Meteremos los métodos que no son crud
  
}

module.exports = CategoryRepository