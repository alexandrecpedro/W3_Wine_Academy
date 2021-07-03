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
    AlunoPlanoCurso.associate = (models) => {
        AlunoPlanoCurso.hasMany(models.Aluno, {
            foreignKey: 'aluno_id',
            as: 'aluno_planocurso'
        })
        AlunoPlanoCurso.hasMany(models.Curso, {
            foreignKey: 'curso_id',
            as: 'curso_planoaluno'
        })
        AlunoPlanoCurso.hasMany(models.Plano, {
            foreignKey: 'plano_id',
            as: 'plano_cursoaluno'
        })
    }
    return AlunoPlanoCurso
}