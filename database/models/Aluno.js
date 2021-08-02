module.exports = (sequelize, DataTypes) => {
    // const Usuario = sequelize.define('nome do modelo')
    const Aluno = sequelize.define(
        'Aluno', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        data_nasc: {
            // DATEONLY = Date without time
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique: true
        },
        nacionalidade: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        edocivil: {
            type: DataTypes.ENUM('Solteiro(a)', 'Casado(a) ou União Estável', 'Divorciado(a) ou separado(a) judicialmente', 'Viúvo(a)', 'Não informado'),
            allowNull: false
        },
        genero: {
            type: DataTypes.ENUM('M', 'F', 'Não-Binário', 'Não Informado'),
            allowNull: true
        },
        telefone: {
            type: DataTypes.STRING(14),
            allowNull: true
        },
        celular: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        tableName: 'alunos',
        timestamps: true
    });
    // Aluno.associate = (models) => {
    //     // 1:N
    //     Aluno.hasMany(models.FormaPago, {
    //         foreignKey: 'aluno_id',
    //         as: 'forma_pagos'
    //     })
    //     // 1:N
    //     Aluno.hasMany(models.Endereco, {
    //         foreignKey: 'aluno_id',
    //         as: 'enderecos'
    //     })
    //     // 1:N
    //     Aluno.hasMany(models.AlunoPlanoCurso, {
    //         foreignKey: 'aluno_id',
    //         as: 'alunoplanocursos'
    //     })
    // }
    return Aluno
}