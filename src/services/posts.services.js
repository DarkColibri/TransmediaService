const BaseService = require("./base.services");

class PostService extends BaseService {
  constructor({ PostBusiness }) {
    super(PostBusiness);
  }
}

module.exports = PostService;