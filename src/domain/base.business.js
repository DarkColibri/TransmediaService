const debug = require("debug")("web:src:domain:base.business.js");

class BaseBusiness {
  constructor(EntityRepository) {
    this._entityRepository = EntityRepository;
    // this.entityToMap = entityToMap;
  }
  
  async getAll() {
    debug('[Entra]');
    const entities = await this._entityRepository.findAll();
    debug('[Sale] '+ JSON.stringify( entities ));
    if (!entities) return null;
    return entities;
  }

  async get(id) {
    const entity = await this._entityRepository.findOne(id);
    debug('[BUSINESS]'+ JSON.stringify( entity ));
    if (!entity) return null;
    return entity;
  }

  async create(entity) {
    debug('[BUSINESS]'+ JSON.stringify( entity ));
    const createdEntity = await this._entityRepository.create(entity);
    if(!createdEntity) return null;
    return createdEntity;
  }

  async update(id, entity) {
    entity.id = id;
    const updatedEntity = await this._entityRepository.update(id, entity);
    if(!updatedEntity) return null;
    return updatedEntity;
  }
  
  async delete(id) {
    const { id } = req.params;
      const deleted = await this._db[this.entity].destroy({ where: { id }})
      if (!deleted) return null;
      return deleted
    }
  }
}

module.exports = BaseBusiness;