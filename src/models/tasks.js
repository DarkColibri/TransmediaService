const debug = require('debug')('web:models:tasks')
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  debug(moment().format('MMMM Do YYYY, h:mm:ss a'));
  const Tasks = sequelize.define('tasks', {
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

  return Tasks;
}