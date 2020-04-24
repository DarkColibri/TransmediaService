const BaseRepository = require('./base.repository');

class ThreadRepository extends BaseRepository {
  constructor({ db }) {
    // constructor del padre
    super(db, 'threads');
  }
  // Meteremos los métodos que no son crud
  
}

module.exports = ThreadRepository