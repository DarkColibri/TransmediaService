'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('roles', [
        {
        name: 'Admin',
        description: 'Super Usuario. Este usuario puede realizar todo.',
        createdAt: new Date(),
        UpdatedAt: new Date()
      },{
        name: 'Profesor',
        description: 'Este es el rol del usuario profesor. Tiene más pivilegios que un "Alumno".',
        createdAt: new Date(),
        UpdatedAt: new Date()
      },{
        name: 'Alumno',
        description: 'Este es el rol de un usuario normal, que es el alumno.',
        createdAt: new Date(),
        UpdatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
