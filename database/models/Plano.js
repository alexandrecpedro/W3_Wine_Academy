module.exports = (sequelize, DataTypes) => {
    const Plano = sequelize.define('Plano', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_plano: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'planos',
        timestamps: true
    });
    Plano.associate = (models) => {
        // N:M
        Plano.belongsToMany(models.Curso, {
            as: 'cursos',
            through: 'planos_has_cursos',
            foreignKey: 'plano_id',
            otherKey: 'curso_id',
            timestamps: true
        })
        // 1:N
        Plano.hasMany(models.AlunoPlanoCurso, {
            foreignKey: 'plano_id',
            as: 'cursoaluno_planos'
        })
    }
    return Plano
}