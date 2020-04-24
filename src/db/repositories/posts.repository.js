const BaseRepository = require('./base.repository');

class PostRepository extends BaseRepository {
  constructor({ db }) {
    // constructor del padre
    super(db, 'posts');
  }
  // Meteremos los métodos que no son crud
  
}

module.exports = PostRepository