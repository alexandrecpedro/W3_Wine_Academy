module.exports = (sequelize, DataTypes) => {
    const PlanoHasCurso = sequelize.define('PlanoHasCurso', {
        plano_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        curso_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'planos_has_cursos',
        timestamps: true
    });
    return PlanoHasCurso
}