const debug = require("debug")("web:src:services:base.services.js");

class BaseService {
  constructor(EntityBusiness) {
    this._entityBusiness = EntityBusiness;
  }

  async getAll() {
    debug('[Entra]')
    const entities = await this._entityBusiness.getAll();
    debug('[Sale] '+ JSON.stringify( entities ));
    return entities;
  }

  async get(id) {
    const entity = await this._entityBusiness.get(id);
    // console.log('[SERVCIES]'+ JSON.stringify( entity ));
    return entity;
  }

  async create(entity) {
    debug('[SERVCIES] Body: '+ JSON.stringify( entity ));
    const createdEntity = await this._entityBusiness.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    const updatedEntity = await this._entityBusiness.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    const deletedEntity = await this._entityBusiness.delete(id);
    return deletedEntity;
  }
}
  
module.exports = BaseService;