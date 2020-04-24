const debug = require("debug")("web:src:db:repositories:base.repositories.js");

class BaseRepository {
  constructor(db, entity) {
    this._db = db;
    this.entity = entity;
  }

  findAll() {
    debug('[Entra] Table:' + this.entity);
    return this._db[this.entity].findAll();
  }

  findOne(id) {
    return this._db[this.entity].findOne({ where: { id } });
  }

  create(entity) {
    debug('[Entra] Table:' + this.entity);
    debug(' Body:' + JSON.stringify(entity));
    return this._db[this.entity].create(entity);
  }

  update(id, entity) {
    // No permite nulos. Los eliminamos
    delete entity.createAt;
    delete entity.updateAt;
    return this._db[this.entity].update(entity, { where:{ id }});
  }

  delete(id) {
    return this._db[this.entity].destroy({ where: { id }});
  }
}

module.exports = BaseRepository;