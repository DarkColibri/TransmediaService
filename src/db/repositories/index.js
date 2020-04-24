const debug = require("debug")("web:src:db:repositories:index.js");
debug("INICIO");

module.exports = {
    AssociationCategoryRepository: require('./associtionCategories.repository'),
    AssociationRepository: require('./associtions.repository'),
    CategoryRepository: require('./categories.repository'),
    PostRepository: require('./posts.repository'),
    ThreadRepository: require('./threads.repository'),
    RoleRepository: require('./roles.repository'),
    UserRepository: require('./users.repository')
};