'use strict';
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define('tasks', {
    description: DataTypes.STRING,
    subject: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    replies: DataTypes.INTEGER,
    visits: DataTypes.INTEGER,
    views: DataTypes.INTEGER
  }, {});
  tasks.associate = function(models) {
    // Tiene una categoría
    tasks.belongsTo(models.categories);
    // Tiene un usuario
    tasks.belongsTo(models.users);
    // Tiene varios Comentarios
    tasks.hasMany(models.posts, {
      foreignKey: 'threadId',
      as: 'posts'
    })
  };
  return tasks;
};