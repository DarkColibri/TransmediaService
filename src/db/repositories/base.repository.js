const debug = require("debug")("web:src:db:repositories:base.repositories.js")

class BaseRepository {
  constructor(db, entity) {
    this._db = db
    this.entity = entity
  }

  async findAll() {
    // debug('FIND ALL: ' + this.entity)
      const entities = await this._db[this.entity].findAll()
    // debug('REQUEST: '+ JSON.stringify( entities ));
      if (!entities) return null;
      return entities;
  }

  async findOne(id) {
    console.log('FIND ONE: ' + id)
    // console.log(req.params)
    const entity = await this._db[this.entity].findOne({ where: { id } })
    // debug('REQUEST: '+ JSON.stringify( entity ));
    if (!entity) return null;
    return entity;
  }

  async create(body) {
    console.log('TABLE: ' + JSON.stringify(body))
    const createdEntitY = await this._db[this.entity].create(body)
    console.log('REQUEST: '+ JSON.stringify( createdEntitY ));
    if (!createdEntitY) return null;
    return createdEntitY
    ;
  }

  async update(id, entity) {
    // No permite nulos. Los eliminamos
    delete entity.createAt
    delete entity.updateAt
    const update = await this._db[this.entity].update(entity, { where:{ id }})
    if (!updated) return null;
    return updated
  }

  async delete(id) {
    console.log('Borrar: ' + id)
    const deleted = await this._db[this.entity].destroy({ where: { id }})
    console.log('REQUEST: '+ JSON.stringify( deleted ));
    if (!deleted) return null;
    return deleted
  }
}

module.exports = BaseRepository