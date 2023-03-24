const genreService = require("../services/genre.service")

const genreController = {

    getAll : async (req, res, next) => {
        await genreService.getAll()  
             
        res.json({})
    },

    getOneById : async (req, res, next) => {
        let id = req.params.id
        await genreService.getOneById(id)

        res.json({})
    },

    add : async (req, res, next) => {
        let createGenre = req.body
        await genreService.add(createGenre)

        res.json({})
    },

    searchByName : async (req, res, next) => {
        let name = req.params.name
        let oneGenre = await genreService.searchByName(name)

        res.json({})
    },
}


module.exports = genreController

