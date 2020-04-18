'use strict';
module.exports = (sequelize, DataTypes) => {
  const associationCategories = sequelize.define('associationCategories', {
    categoryId: DataTypes.INTEGER,
    associationId: DataTypes.INTEGER
  }, {});
  associationCategories.associate = function(models) {
    // associations can be defined here
  };
  return associationCategories;
};