const { DataTypes, Sequelize } = require("sequelize")


module.exports = (sequelize) => {

    const Genre = sequelize.define('genre', {
        name : {
            type : DataTypes.STRING(30),
            allowNull : false,
            unique : {
                name : "UK_Genre_name"
            }
        },
        desc : {
            type : DataTypes.STRING(1000),
            allowNull : true
        }
    },{
        tableName : "genre",
        timestamps : false
    })

    return Genre
}