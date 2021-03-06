'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Process', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        processName: {type: DataTypes.STRING, allowNull: true},
        suhu: {type: DataTypes.STRING, allowNull: true},
        depan: {type: DataTypes.STRING, allowNull: true},
        tengah: {type: DataTypes.STRING, allowNull: true},
        belakang: {type: DataTypes.STRING, allowNull: true},
        date_captured: {type: DataTypes.STRING, allowNull: true},
        date_created: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
        created_by: {type: DataTypes.STRING(500), allowNull: true},
        laporan_id: {
            type: DataTypes.UUID,
            onDelete: 'CASCADE',
            references: {
                model: 'Laporan',
                key: 'id'
            }
        },
    }, {
        timestamps: false,
        freezeTableName: true, 
    });

};
