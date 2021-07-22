'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      bairro: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      ativo: {
        type: Sequelize.TINYINT,
        allowNull: false
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true
      },
      professor_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
  }
};
