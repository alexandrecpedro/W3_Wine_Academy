module.exports = (sequelize, DataTypes) => {
    const FormaPago = sequelize.define('FormaPago', {
        id: {
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
        timestamps: true
    });
    FormaPago.associate = (models) => {
        // N:1
        FormaPago.belongsTo(models.Aluno, {
            foreignKey: 'aluno_id',
            as: 'aluno'
        })
        // N:1
        FormaPago.belongsTo(models.ModalidadePago, {
            foreignKey: 'modalidade_pago_id',
            as: 'modalidade_pago'
        })
    }
    return FormaPago
}