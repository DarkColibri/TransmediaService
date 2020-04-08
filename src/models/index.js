const debug = require("debug")("web:models:index");
debug('Cargamos modelos.');

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(`${__dirname  }/../config/config.json`)[env];
const config = require('../config/config.json')[env];

const db = {};

// const url = 'mysql://root:ortega@127.0.0.1:3306/transmedia_schema';
// const sequelize = new Sequelize(url); 
const sequelize = new Sequelize(config.database, config.username, config.password, config);
// if (config.use_env_variable) {
//   const sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   const sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.getQueryInterface().showAllSchemas().then((tableObj) => {
    debug(tableObj);
  })
  .catch((err) => {
    console.log('showAllSchemas ERROR', err);
  });

module.exports = db;