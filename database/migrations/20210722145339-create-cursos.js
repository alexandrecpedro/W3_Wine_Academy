'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cursos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      carga_horaria: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      link: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      ilustracao: {
        type: Sequelize.BLOB,
        allowNull: true
      },
      area_estudo_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cursos');
  }
};
