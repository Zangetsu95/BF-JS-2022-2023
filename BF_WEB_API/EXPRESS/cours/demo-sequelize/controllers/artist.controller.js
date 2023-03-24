const artistService = require("../services/artist.service")

const artistController = {

    getAll : async (req, res, next) => {
        await artistService.getAll()       
        
        res.json({})
    },

    getOneById : async (req, res, next) => {
        let id = req.params.id
        let oneArtist = await artistService.getOneById(id)
        
        res.json({})
    },

    add : async (req, res, next) => {
        let createArtist = req.body
        await artistService.add(createArtist)
        
        res.json({})
    },

    update : async (req, res, next) => {
        let id = req.params.id
        let upArtist = req.body
        await artistService.update(id, upArtist)
        
        res.json({})
    },

    delete : async (req, res, next) => {
        let id = req.params.id
        await artistService.delete(id)
        
        res.json({})
    }
}


module.exports = artistController

