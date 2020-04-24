const BaseRepository = require('./base.repository');

class RoleRepository extends BaseRepository {
  constructor({ db }) {
    // constructor del padre
    super(db, 'roles');
  }
  // Meteremos los métodos que no son crud
  
}

module.exports = RoleRepository