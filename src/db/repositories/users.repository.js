const BaseRepository = require('./base.repository');

class UserRepository extends BaseRepository {
  constructor({ db }) {
    // constructor del padre
    super(db, 'users');
  }
  // Meteremos los métodos que no son crud
  
}

module.exports = UserRepository