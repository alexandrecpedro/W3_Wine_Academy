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
    return FormaPago
}