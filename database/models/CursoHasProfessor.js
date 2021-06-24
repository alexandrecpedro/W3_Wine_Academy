module.exports = (sequelize, DataTypes) => {
    const CursoHasProfessor = sequelize.define('CursoHasProfessor', {
        curso_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        professor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'curso_has_professor',
        timestamps: false
    });
    return CursoHasProfessor
}