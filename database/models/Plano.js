module.exports = (sequelize, DataTypes) => {
    const Plano = sequelize.define('Plano', {
        id_plano: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_planos: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        aluno_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'plano',
        timestamps: false
    });
    return Plano
}