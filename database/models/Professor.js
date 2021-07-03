module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor', {
        id_professor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        apelido: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        cargo: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        valor_hora: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'professor',
        timestamps: false
    });
    Professor.associate = (models) => {
        Professor.belongsTo(models.Endereco, {
            foreignKey: 'professor_id',
            as: 'end_professor'
        })
        Professor.belongsToMany(models.Curso, {
            foreignKey: 'curso_id',
            otherKey: 'professor_id',
            through: models.CursoHasProfessor,
            as: 'cursohasprofessor'
        })
    }
    return Professor
}