const BaseService = require("./base.services");

class ThreadService extends BaseService {
  constructor({ ThreadBusiness }) {
    super(ThreadBusiness);
  }
}

module.exports = ThreadService;