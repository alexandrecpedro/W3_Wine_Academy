'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('forma_pago', {
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
      modalidade_pago_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('forma_pago');
  }
};
