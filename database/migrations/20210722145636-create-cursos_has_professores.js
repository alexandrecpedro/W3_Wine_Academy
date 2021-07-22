'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cursos_has_professores', {
      curso_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      professor_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cursos_has_professores');
  }
};
