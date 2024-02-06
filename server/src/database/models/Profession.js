module.exports = (sequelize, DataTypes) => {
    const Profession = sequelize.define('Profession', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(110),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'professions',
        timestamps: true
    });
    Profession.associate = (models) => {
        Profession.hasMany(models.Applicant, {
            as: 'applicants',
            foreignKey: 'professionId'
        })
    }
    return Profession;
}