const BaseController = require("./base.controller");

class PostController extends BaseController {
  constructor({ PostService }) {
    super(PostService);
  }

  async getThreadsPosts(req, res) {
    const { id } = req.params;
    console.log('CONTROLLER APOR LOS POSTS:' + id)
    let entity = await this._entityService.getThreadsPosts(id);
    if (!entity) {
      return res.status(404).send({messaje: 'Id = ' + id +' not found.'});
    }
    return res.json(entity);
  }
}

module.exports = PostController;
