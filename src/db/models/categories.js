'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    // UNA CATEGORIA PUEDE TENER MUCHOS THREADS
    categories.hasMany(models.threads, {
      foreignKey: 'categoryId',
      as: 'threads'
    }),
    categories.belongsToMany(models.associations,{
      through: 'associationCategories',
      as: 'associations',
      foreignKey: 'categoryId'
    })
  };
  return categories;
};