module.exports = (sequelize, DataTypes) => {
    const AreaEstudo = sequelize.define('AreaEstudo', {
        id: {
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
        timestamps: true
    });
    // AreaEstudo.associate = (models) => {
    //     // 1:N
    //     AreaEstudo.hasMany(models.Curso, {
    //         foreignKey: 'area_estudo_id',
    //         as: 'cursos'
    //     })
    // }
    return AreaEstudo
}