const debug = require('debug')('web:models:tasks')
const moment = require("moment");

// debug('Load ' + __dirname + '/' + __filename);
debug('Cargamos TASKS');

module.exports = (sequelize, DataTypes) => {
  debug(moment().format('MMMM Do YYYY, h:mm:ss a'));
  const Task = sequelize.define('tasks', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false
    }
  }
  // , {
  //   freezeTableName: true,
  // }
  );

  // relations
  // Cron.associate = (models) => {
  //   Cron.belongsTo(models.author);
  // };

  return Task;
}