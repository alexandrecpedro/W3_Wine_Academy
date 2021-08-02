module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        puesto: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        valor_hora: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'professores',
        timestamps: true
    });
    // Professor.associate = (models) => {
    //     // 1:N
    //     Professor.hasMany(models.Endereco, {
    //         foreignKey: 'professor_id',
    //         as: 'enderecos_prof'
    //     })
    //     // N:M
    //     Professor.belongsToMany(models.Curso, {
    //         as: 'cursos',
    //         through: 'cursos_has_professores',
    //         foreignKey: 'professor_id',
    //         otherKey: 'curso_id',
    //         timestamps: true
    //     })
    // }
    return Professor
}