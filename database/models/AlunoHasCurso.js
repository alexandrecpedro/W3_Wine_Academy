module.exports = (sequelize, DataTypes) => {
    const AlunoHasCurso = sequelize.define('AlunoHasCurso', {
        aluno_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        curso_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'aluno_has_curso',
        timestamps: false
    });
    return AlunoHasCurso
}