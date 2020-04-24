const debug = require("debug")("web:src:api:controller:base.controller.js");


class BaseController {
  constructor(EntityService) {
    this._entityService = EntityService;
  }
  
  async getAll(req, res) {
    debug('[Entra]');
    let entities = await this._entityService.getAll();
    debug('[Sale] ')
    if (!entities) {
      return res.status(404).send({messaje: 'Table empty.'});
    }
    return res.json(entities);
  }

  async get(req, res) {
    const { id } = req.params;
    let entity = await this._entityService.get(id);
    if (!entity) {
      return res.status(404).send({messaje: 'Id = ' + id +' not found.'});
    }
    return res.json(entity);
  }

  async create(req, res) {
    const { body } = req;
    debug('BASE.CONTROLLER ' + JSON.stringify(body))
    const createdEntity = await this._entityService.create(body);
    debug('PASA');
    if (!createdEntity) {
      return createdEntity.status(404).send({messaje: 'Error to create.'});
    }
    return res.status(201).json(createdEntity);
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;
    const updatedEntity = await this._entityService.update(id, body);
    if (!updatedEntity) {
      return res.status(404).send({messaje: 'Error'});
    }
    return res.json(updatedEntity);
  }

  async delete(req, res) {
    const { id } = req.params;
    await this._entityService.delete(id);
    return res.status(204).send();
  }
}

module.exports = BaseController;