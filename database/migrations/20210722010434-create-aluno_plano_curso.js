'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aluno_plano_curso', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      curso_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      plano_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('aluno_plano_curso');
  }
};
