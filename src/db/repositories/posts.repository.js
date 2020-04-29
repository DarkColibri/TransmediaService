const BaseRepository = require('./base.repository');

class PostRepository extends BaseRepository {
  constructor({ db }) {
    // constructor del padre
    super(db, 'posts');
  }
  // Meteremos los métodos que no son crud
  getThreadsPosts(thread) {
    console.log('[REPOSITORY ]:' + thread);
    return this._db[this.entity].findAll({
      where: {
        threadId: thread
      }
    });
  }
}

module.exports = PostRepository