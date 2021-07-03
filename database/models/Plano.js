module.exports = (sequelize, DataTypes) => {
    const Plano = sequelize.define('Plano', {
        id_plano: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_plano: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'plano',
        timestamps: false
    });
    Plano.associate = (models) => {
        Plano.belongsToMany(models.Curso, {
            foreignKey: 'plano_id',
            otherKey: 'curso_id',
            through: models.PlanoHasCurso,
            as: 'cursohasplano'
        })
        Plano.hasMany(models.AlunoPlanoCurso, {
            foreignKey: 'plano_id',
            as: 'cursoaluno_plano'
        })

    }
    return Plano
}