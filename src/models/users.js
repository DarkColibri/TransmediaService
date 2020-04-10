const debug = require('debug')('web:models:users')
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  debug(moment().format('MMMM Do YYYY, h:mm:ss a'));
  const Users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false
    },
    pasword: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false
    }
  }
  // ,{
  //   freezeTableName: false,
  // }
  );

  return Users;
}