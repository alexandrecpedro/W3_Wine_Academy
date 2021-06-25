module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
        id_endereco: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        apelido: {
            type: DataTypes.STRING(45),
            allowNull: false
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
        municipio: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        ativo: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        aluno_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        professor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'endereco',
        timestamps: false
    });
    return Endereco
}