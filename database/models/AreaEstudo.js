module.exports = (sequelize, DataTypes) => {
    const AreaEstudo = sequelize.define('AreaEstudo', {
        id_area_estudo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        area: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'area_estudo',
        timestamps: false
    });
    return AreaEstudo
}