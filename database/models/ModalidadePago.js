module.exports = (sequelize, DataTypes) => {
    const ModalidadePago = sequelize.define('ModalidadePago', {
        id_modalidade_pago: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        modalidade: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'modalidade_pago',
        timestamps: false
    });
    return ModalidadePago
}