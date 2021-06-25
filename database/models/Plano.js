module.exports = (sequelize, DataTypes) => {
    const Plano = sequelize.define('Plano', {
        id_plano: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_plano: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'plano',
        timestamps: false
    });
    return Plano
}