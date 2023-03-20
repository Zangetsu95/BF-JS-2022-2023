const facturesModelsSql = require('../models/factures.sql.models')
const employeesServiceSql = require('./employees.sql.service')


const facturesServiceSql = {
    getAll_sql: async () => {
        return await facturesModelsSql.getAll_sql()
    },

    getOne_sql: async (id) => {
        let oneFact = await facturesModelsSql.getOne_sql(id)

        if (oneFact != undefined) {
            return oneFact
        } else {
            return {
                errorMessage: `La facture numéro : ${id} n'existe pas`
            }
        }
    },
    create_sql: async (newFact) => {
        newFact.active = false

        let newFactCreated = await facturesModelsSql.create_sql(newFact)
        return newFactCreated
    },

    update_sql: async (factToUpdate) => {
        let upFact = await facturesModelsSql.update_sql(factToUpdate)
        return upFact
    }
}

module.exports = employeesServiceSql