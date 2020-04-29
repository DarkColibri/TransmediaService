const debug = require("debug")("web:src:services:post.services.js");
const BaseService = require("./base.services");

class PostService extends BaseService {
  constructor({ PostBusiness }) {
    super(PostBusiness);
  }
  
  async getThreadsPosts(threadId) {
    debug('[OBTENEMOS LOS POSTS DE: ' + threadId + ' ]')
    const entities = await this._entityBusiness.getThreadsPosts(threadId);
    debug('[Sale] '+ JSON.stringify( entities ));
    return entities;
  }
}

module.exports = PostService;