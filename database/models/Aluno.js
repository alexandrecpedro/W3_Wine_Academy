module.exports = (sequelize, DataTypes) => {
    // const Usuario = sequelize.define('nome do modelo')
    const Aluno = sequelize.define('Aluno', {
        id_aluno: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        apelido: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        data_nascimento: {
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
        estado_civil: {
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
        },
        modalidade_pago_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'aluno',
        timestamps: false
    });
    Aluno.associate = (models) => {
        Aluno.belongsTo(models.FormaPago, {
            foreignKey: 'aluno_id',
            as: 'forma_pago'
        })
        Aluno.belongsTo(models.Endereco, {
            foreignKey: 'aluno_id',
            as: 'end_aluno'
        })
        Aluno.belongsTo(models.AlunoPlanoCurso, {
            foreignKey: 'aluno_id',
            as: 'planocurso_aluno'
        })
    }
    return Aluno
}