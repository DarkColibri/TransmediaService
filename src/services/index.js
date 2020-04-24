const debug = require("debug")("web:src:services:index.js");
debug("INICIO");

module.exports = {
  AssociationService: require("./associations.services"),
  AssociationCategoryService: require("./associationsCategories.services"),
  CategoryService: require("./categories.services"),
  RoleService: require("./roles.services"),
  ThreadService: require("./threads.services"),
  PostService: require("./posts.services"),
  UserService: require("./users.services")
};