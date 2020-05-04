const BaseController = require("./base.controller");

class ThreadController extends BaseController {
  constructor({ ThreadService }) {
    super(ThreadService);
  }
}

module.exports = ThreadController;
