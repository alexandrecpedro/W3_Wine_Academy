module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_curso: {
            type: DataTypes.STRING(200),
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
        tableName: 'cursos',
        timestamps: false
    });
    Curso.associate = (models) => {
        Curso.belongsToMany(models.Professor, {
            foreignKey: 'curso_id',
            otherKey: 'professor_id',
            through: models.CursoHasProfessor,
            as: 'professorhascurso'
        })
        Curso.belongsToMany(models.Plano, {
            foreignKey: 'plano_id',
            otherKey: 'curso_id',
            through: models.PlanoHasCurso,
            as: 'planohascurso'
        })
        Curso.belongsTo(models.AlunoPlanoCurso, {
            foreignKey: 'curso_id',
            as: 'planoaluno_curso'
        })
        Curso.hasMany(models.AreaEstudo, {
            foreignKey: 'area_estudo_id',
            as: 'area-estudo_curso'
        })
    }
    return Curso
}