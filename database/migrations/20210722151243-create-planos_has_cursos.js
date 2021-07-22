'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('planos_has_cursos', {
      plano_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      curso_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('planos_has_cursos');
  }
};
