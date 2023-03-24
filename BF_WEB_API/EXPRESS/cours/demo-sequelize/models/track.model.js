const { Sequelize, DataTypes, ModelCtor } = require("sequelize")

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns {ModelCtor<any>} 
 */
module.exports = (sequelize) => {

    const Track = sequelize.define("track", {
        id : {
           type : DataTypes.BIGINT(),
           autoIncrement : true,
           primaryKey : true 
        },
        name : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        duration : {
            type : DataTypes.INTEGER(),
            allowNull : false
        }
    }, {
        tableName : "track",
        timestamps : false
    })

    return Track
}