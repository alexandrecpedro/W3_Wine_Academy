module.exports = (sequelize, DataTypes) => {
    const FormaPago = sequelize.define('FormaPago', {
        id_forma_pago: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        aluno_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        modalidade_pago_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'forma_pago',
        timestamps: false
    });
    FormaPago.associate = (models) => {
        FormaPago.hasMany(models.Aluno, {
            foreignKey: 'aluno_id',
            as: 'alunos'
        })
        FormaPago.hasMany(models.ModalidadePago, {
            foreignKey: 'modalidade_pago_id',
            as: 'modal_pago'
        })
    }
    return FormaPago
}