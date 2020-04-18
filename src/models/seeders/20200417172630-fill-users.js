'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'javi',
        password: 'javi',
        email: 'javi@mail.com',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'ana',
        password: 'ana',
        email: 'ana@mail.com',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'pepe',
        password: 'pepe',
        email: 'javi@mail.com',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
