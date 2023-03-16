let listFact = require("../datas/compta.json")
const fs = require('fs')

const comptaModels = {

    getAll: () => {
        return [...listFact]
    },

    getOne: (id) => {
        return listFact[id]
    },

    create: (newFact) => {
        // listFact.push(newFact)
        // return listFact[listFact.length - 1]
        let id = listFact.length + 1
        let fact = {
            id: id,
            compagny_name: newFact.compagny_name,
            account: newFact.account,
            email: newFact.email,
            amount: newFact.amount,
            currency: newFact.currency,
            is_payed: newFact.is_payed
        }
        listFact.push(fact)
        fs.writeFileSync('datas/compta.json', JSON.stringify(listFact))

        /* It's filtering the list of factures to keep only the ones that are not payed,
        then it's summing the amount of each facture. */
        let solde = listFact.filter((f) => !f.is_payed).reduce((sum, f) => sum + f.amount, 0)
        return solde
    },

    // update: (id) => {
    //     listFact[id] = "updated fact" + (parseInt(id) + 1)
    //     return [...listFact]
    // },
    update: (id, newData) => {
        const updatedFact = { ...listFact[id], ...newData }
        listFact[id] = updatedFact

        fs.writeFileSync("../datas/compta.json", JSON.stringify(listFact))

        return updatedFact
    },

    delete: (id) => {
        listFact[id] = "deleted fact" + (parseInt(id) + 1)
        return [...listFact]
    }
}


module.exports = comptaModels