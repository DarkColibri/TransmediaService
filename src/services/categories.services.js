const BaseService = require("./base.services");

class CategoryService extends BaseService {
  constructor({ CategoryBusiness }) {
    super(CategoryBusiness);
  }
}

module.exports = CategoryService;