// asClass: Inyecta una clase que nosotros le indiquemos.
const { asClass, createContainer, asFunction, asValue } = require("awilix");

const debug = require("debug")("web:src:api:container.js");

// app start
const StartUp = require("./startup"); 
const Server = require("./server");
// Config
const config = require('../config/environments');

// db
const db = require("../db/models");
// Repository
const { AssociationRepository, AssociationCategoryRepository, CategoryRepository, PostRepository, ThreadRepository, RoleRepository, UserRepository } = require("../db/repositories");
// Business
const { AssociationBusiness, AssociationCategoryBusiness, CategoryBusiness, PostBusiness, ThreadBusiness, RoleBusiness, UserBusiness } = require("../domain");
// Services
const { AssociationService, AssociationCategoryService, CategoryService,  PostService, ThreadService, RoleService, UserService } = require("../services");
// Controller
const { AssociationController, AssociationCategoryController, CategoryController, PostController, ThreadController, RoleController, UserController  } = require("../api/controllers");

// Router
const Routes = require("../api/routes");
const AssociationRouter = require("../api/routes/associations.routes");
const AssociationCategoryRouter = require("../api/routes/associationsCategories.routes");
const CategoryRouter = require("../api/routes/categories.routes");
const ThreadRouter = require("../api/routes/threads.routes");
const RoleRouter = require("../api/routes/roles.routes");
const PostRouter = require("../api/routes/posts.routes");
const UserRouter = require("../api/routes/users.routes");

// Create
const container = createContainer();

container.register({
  config: asValue(config),
  db: asValue(db),
  app: asClass(StartUp).singleton(),
  server: asClass(Server).singleton(),
  router: asFunction(Routes).singleton()
})
// Repository
.register({
  AssociationRepository: asClass(AssociationRepository).singleton(),
  AssociationCategoryRepository: asClass(AssociationCategoryRepository).singleton(),
  CategoryRepository: asClass(CategoryRepository).singleton(),
  PostRepository: asClass(PostRepository).singleton(),
  ThreadRepository: asClass(ThreadRepository).singleton(),
  RoleRepository: asClass(RoleRepository).singleton(),
  UserRepository: asClass(UserRepository).singleton()
})
// Business
.register({
  AssociationBusiness: asClass(AssociationBusiness).singleton(),
  AssociationCategoryBusiness: asClass(AssociationCategoryBusiness).singleton(),
  CategoryBusiness: asClass(CategoryBusiness).singleton(),
  PostBusiness: asClass(PostBusiness).singleton(),
  ThreadBusiness: asClass(ThreadBusiness).singleton(),
  RoleBusiness: asClass(RoleBusiness).singleton(),
  UserBusiness: asClass(UserBusiness).singleton()
})
// Service
.register({
  AssociationService: asClass(AssociationService).singleton(),
  AssociationCategoryService: asClass(AssociationCategoryService).singleton(),
  CategoryService: asClass(CategoryService).singleton(),
  PostService: asClass(PostService).singleton(),
  ThreadService: asClass(ThreadService).singleton(),
  RoleService: asClass(RoleService).singleton(),
  UserService: asClass(UserService).singleton()
})
// Controller
.register({
  AssociationController: asClass(AssociationController).singleton(),
  AssociationCategoryController: asClass(AssociationCategoryController).singleton(),
  CategoryController: asClass(CategoryController).singleton(),
  PostController: asClass(PostController).singleton(),
  ThreadController: asClass(ThreadController).singleton(),
  RoleController: asClass(RoleController).singleton(),
  UserController: asClass(UserController).singleton()
})
.register({
  AssociationRouter: asFunction(AssociationRouter).singleton(),
  AssociationCategoryRouter: asFunction(AssociationCategoryRouter).singleton(),
  CategoryRouter: asFunction(CategoryRouter).singleton(),
  ThreadRouter: asFunction(ThreadRouter).singleton(),
  RoleRouter: asFunction(RoleRouter).singleton(),
  PostRouter: asFunction(PostRouter).singleton(),
  UserRouter: asFunction(UserRouter).singleton()
});

module.exports = container;
