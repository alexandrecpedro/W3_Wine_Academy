module.exports = (sequelize, DataTypes) => {
    const ModalidadePago = sequelize.define('ModalidadePago', {
        id: {
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
        timestamps: true
    });
    // ModalidadePago.associate = (models) => {
    //     // 1:N
    //     ModalidadePago.hasMany(models.FormaPago, {
    //         foreignKey: 'modalidade_pago_id',
    //         as: 'forma_pagos'
    //     })
    // }
    return ModalidadePago
}