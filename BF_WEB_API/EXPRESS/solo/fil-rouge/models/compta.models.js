const facture = require("../datas/factures.json")

const comptaModels = {

    getAll: (paramFilter) => {
        let { active } = paramFilter
        let facturesReturn = JSON.parse(JSON.stringify(facture))

        if (active) {
            facturesReturn = facturesReturn.filter(fact => fact.active == true)
        }
        return facturesReturn
    },
    getOne: (id) => {
        let oneFact = facture.find(fact => fact.id = id)
        return oneFact
    },
    create: (newFact) => {
        let returnedFact = {
            id: factures.length + 1,
            ...newFact
        }
        facture.push(returnedFact)
        return returnedFact = facture.find(fact => fact.id == facture.length)
    },
    delete: (id) => {
        let indexFactFound = facture.findIndex(fact => fact.id == id)

        if (indexFactFound != -1)
            facture[indexFactFound].active = false

        return facture[indexFactFound]
    }
}