module.exports = (sequelize, DataTypes) => {
    const Applicant = sequelize.define('Applicant', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        DNI: {
            type: DataTypes.STRING(9),
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(12)
        },
        linkedinURL: {
            type: DataTypes.STRING(99)
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false
        },
        genre: {
            type: DataTypes.ENUM('Hombre', 'Mujer', 'Otro', 'Prefiero no decirlo'),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(25)
        },
        professionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        experiencieLevel: {
            type: DataTypes.STRING(20)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'applicants',
        paranoid: true
    });

    Applicant.associate = (models) => {
        Applicant.belongsTo(models.Profession, {
            as: 'professions',
            foreignKey: 'professionId'
        });
    };

    return Applicant;
}