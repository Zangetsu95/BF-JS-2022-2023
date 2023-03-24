const { Sequelize } = require("sequelize")


const { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env
const db = {}

//construction de la factory de sequelize sur base de mssql dialect (tedious driver)
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host : DB_HOST,
    port : DB_PORT,
    dialect : "mssql"
})


//assignation pour utilisation ultérieur
db.sequelize = sequelize


//ajouts des models (schema) (artist, genre, track)
db.Track = require("./track.model")(sequelize)
//reviens EXACTEMENT AU MEME QUE 
//let track = require("./track.model")
//db.Track = track(sequelize)
db.Genre = require("./genre.model")(sequelize)




//ajouts des relations (MTO OTM MTM OTO)
db.Genre.hasMany(db.Track, {
    foreignKey : {
        allowNull : true
    },
    onDelete : 'NO ACTION'
})
db.Track.belongsTo(db.Genre)



module.exports = db