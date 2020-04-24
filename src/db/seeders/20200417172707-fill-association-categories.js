'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('associationcategories',[
      {
        categoryId: 1,
        associationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        associationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        associationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('associationcategories', null, {});
  }
};
