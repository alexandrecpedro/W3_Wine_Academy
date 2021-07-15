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
        timestamps: true
    });
    Curso.associate = (models) => {
        // N:M
        Curso.belongsToMany(models.Professor, {
            as: 'professores',
            through: 'cursos_has_professores',
            foreignKey: 'curso_id',
            otherKey: 'professor_id',
            timestamps: true
        })
        // N:M
        Curso.belongsToMany(models.Plano, {
            as: 'planos',
            through: 'planos_has_cursos',
            foreignKey: 'curso_id',
            otherKey: 'plano_id',
            timestamps: true
        })
        // 1:N
        Curso.hasMany(models.AlunoPlanoCurso, {
            foreignKey: 'curso_id',
            as: 'alunoplanocursos'
        })
        // N:1
        Curso.belongsTo(models.AreaEstudo, {
            foreignKey: 'area_estudo_id',
            as: 'area_estudo'
        })
    }
    return Curso
}