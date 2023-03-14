const comptaService = require("../../services/compta/compta.service")

const comptaController = {
    getAll: (req, res) => {
        let allCompta = comptaService.getAll()
        res.json(allCompta)
    },
    getOne: (req, res) => {
        let id = parseInt(req.params.id) - 1
        let oneCompta = comptaService.getOne(id)
        res.json(oneCompta)
    },
    create: (req, res) => {
        let newCompta = req.body.name
        let newComptaCreated = comptaService.create(newCompta)

        res.json(newComptaCreated)
    },
    update: (req, res) => {
        let id = req.params.id

        let upCompta = comptaService.update(id)

        res.json(upCompta)
    },
    delete: (req, res) => {
        let id = req.params.id

        let firedCompta = comptaService.delete(id)
        res.json(firedCompta)
    },

}

module.exports = comptaController