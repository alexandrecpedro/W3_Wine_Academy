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
        tableName: 'cursos_has_professores',
        timestamps: false
    });
    return CursoHasProfessor
}