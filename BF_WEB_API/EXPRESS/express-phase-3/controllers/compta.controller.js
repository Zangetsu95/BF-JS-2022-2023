const comptaService = require("../services/compta.service")

const comptaController = {

    getAll : (req, res) => {
        let allFact = comptaService.getAll()
        //BAL TO DTO
        res.json(allFact)
    },

    getOne : (req, res) => {
        let id = parseInt(req.params.id)-1

        let oneFact = comptaService.getOne(id)
        //BAL TO DTO
        res.json(oneFact)
    },

    create : (req, res) => {
        let newFact = req.body.name
        let newFactCreated = comptaService.create(newFact)
        //BAL TO DTO
        res.json(newFactCreated)
    },

    update : (req, res) => {
        let id = parseInt(req.params.id)-1

        let upFact = comptaService.update(id)
        //BAL TO DTO
        res.json(upFact)
    },


    delete : (req, res) => {
        let id = parseInt(req.params.id)-1

        let oldFact = comptaService.delete(id)
        //BAL TO DTO
        res.json(oldFact)
    }
} 

module.exports = comptaController