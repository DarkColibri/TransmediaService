const debug = require("debug")("web:models:association");
const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  debug(moment().format('MMMM Do YYYY, h:mm:ss a'));
  const Associations = sequelize.define('associations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
  // , {
  //   freezeTableName: false,
  // }
  );

  return Associations;
}