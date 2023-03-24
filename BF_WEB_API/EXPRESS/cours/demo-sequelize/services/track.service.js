const db = require("../models")

const trackService = {

    getAll : async () => {
        let { count, rows } = await db.Track.findAndCountAll({
            include : [{
                model : db.Genre, attributes : ["name"]
            }],
            attributes : ["name", "duration"],
            distinct : true
        })

        return {
            tracks : rows,
            count
        }
    },

    getOneById : async (id) => {
        const oneTrack = await db.Track.findByPk(id, {
            attributes : ["id", "name"]
        })

        return oneTrack
    }
}


module.exports = trackService