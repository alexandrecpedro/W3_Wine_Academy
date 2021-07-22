'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alunos', { 
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
      sobrenome: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      data_nasc: {
        // DATEONLY = Date without time
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      nacionalidade: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      edocivil: {
        type: Sequelize.ENUM('Solteiro(a)', 'Casado(a) ou União Estável', 'Divorciado(a) ou separado(a) judicialmente', 'Viúvo(a)', 'Não informado'),
        allowNull: false
      },
      genero: {
        type: Sequelize.ENUM('M', 'F', 'Não-Binário', 'Não Informado'),
        allowNull: true
      },
      telefone: {
        type: Sequelize.STRING(14),
        allowNull: true
      },
      celular: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alunos');
  }
};
