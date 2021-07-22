module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cep: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        endereco: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        numero: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        bairro: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        uf: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        ativo: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        aluno_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: true
        },
        professor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: true
        }
    }, {
        tableName: 'enderecos',
        timestamps: true
    });
    Endereco.associate = (models) => {
        // N:1
        Endereco.belongsTo(models.Aluno, {
            foreignKey: 'aluno_id',
            as: 'aluno_end'
        })
        // N:1
        Endereco.belongsTo(models.Professor, {
            foreignKey: 'professor_id',
            as: 'professor_end'
        })
    }
    return Endereco
}