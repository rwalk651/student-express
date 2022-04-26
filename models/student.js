module.exports = (sequelize, DataTypes) => {

    let Student = sequelize.define('Student', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^[a-z]{2}\d{4}[a-z]{2}$/
            }
        },

        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    Student.sync({ force: true }).then( () => {
        console.log('Synced student table ')
    })

    return Student
}