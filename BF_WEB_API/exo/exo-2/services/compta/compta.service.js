const comptaModels = require("../../models/compta/compta.models")

const comptaService = {
    getAll: () => {
        let allCompta = comptaModels.getAll()
        allCompta = allCompta.reverse()
        return allCompta
    },

    getOne: (id) => {
        let oneCompta = comptaModels.getOne(id)
        return oneCompta
    },
    create: (newCompta) => {
        let newComptaCreated = comptaModels.create(newCompta)
        return newComptaCreated
    },

    delete: (id) => {
        let fireCompta = comptaModels.delete(id)
        return fireCompta
    }
}

module.exports = comptaService