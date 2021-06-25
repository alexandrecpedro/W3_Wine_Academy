module.exports = (sequelize, DataTypes) => {
    const AlunoPlanoCurso = sequelize.define('AlunoPlanoCurso', {
        id_aluno_plano_curso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        aluno_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        curso_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        plano_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'aluno_plano_curso',
        timestamps: false
    });
    return AlunoPlanoCurso
}