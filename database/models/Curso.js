module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
        id_curso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_curso: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        carga_horaria: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        area_estudo_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'curso',
        timestamps: false
    });
    return Curso
}