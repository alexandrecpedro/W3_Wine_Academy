module.exports = (sequelize, DataTypes) => {
    const AlunoPlanoCurso = sequelize.define('AlunoPlanoCurso', {
        id: {
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
        timestamps: true
    });
    AlunoPlanoCurso.associate = (models) => {
        // N:1
        AlunoPlanoCurso.belongsTo(models.Aluno, {
            foreignKey: 'aluno_id',
            as: 'aluno'
        })
        // N:1
        AlunoPlanoCurso.belongsTo(models.Curso, {
            foreignKey: 'curso_id',
            as: 'curso'
        })
        // N:1
        AlunoPlanoCurso.belongsTo(models.Plano, {
            foreignKey: 'plano_id',
            as: 'plano'
        })
    }
    return AlunoPlanoCurso
}