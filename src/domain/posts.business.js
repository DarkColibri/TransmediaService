const BaseBusiness = require("./base.business");

// Heredamos de BASE
class PostBusiness extends BaseBusiness {
  constructor({ PostRepository }) {
    // Llamamos al constructor
    super(PostRepository);
  }

  async getThreadsPosts(threadId) {
    console.log('[getThreadsPosts]' + threadId);
    const entities = await this._entityRepository.getThreadsPosts(threadId);
    console.log('[getThreadsPosts] '+ JSON.stringify( entities ));
    if (!entities) return null;
    return entities;
  }
}

module.exports = PostBusiness;