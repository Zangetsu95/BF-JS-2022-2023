const employeesModels = require("../../models/compta/compta.models")

const employeesService = {

    getAll: () => {
        let allCompta = employeesModels.getAll()
        //BAL
        allCompta = allCompta.reverse()
        return allCompta
    },

    getOne: (id) => {
        let oneCompta = employeesModels.getOne(id)
        //BAL
        return oneCompta
    },

    create: (newCompta) => {
        let newComptaCreated = employeesModels.create(newCompta)
        //BAL
        return newComptaCreated
    },

    update: (id) => {
        let upCompta = employeesModels.update(id)
        //BAL       
        return upCompta
    },

    delete: (id) => {
        let firedCompta = employeesModels.delete(id)
        //BAL
        return firedCompta
    }
}


module.exports = employeesService