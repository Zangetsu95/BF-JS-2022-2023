const comptaModels = require("../models/compta.models")

const comptaService = {
    getAll : () => {
        let allFact = comptaModels.getAll()
        //BAL
        allFact = allFact.reverse()
        return allFact
    },

    getOne : (id) => {
        let oneFact = comptaModels.getOne(id)
        //BAL
        return oneFact
    },

    create : (newFact) => {
        let newFactCreated = comptaModels.create(newFact)
        //BAL
        return newFactCreated
    },

    update : (id) => {
        let upFact = comptaModels.update(id)
        //BAL       
        return upFact
    },

    delete : (id) => {
        let oldFact = comptaModels.delete(id)
        //BAL
        return oldFact
    }
}

module.exports = comptaService