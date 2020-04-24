const BaseRepository = require('./base.repository');

class AssociationRepository extends BaseRepository {
  constructor({ db }) {
    // constructor del padre
    super(db, 'associations');
  }
  // Meteremos los métodos que no son crud
  
}

module.exports = AssociationRepository