const facturesServiceSql = require('../services/factures.sql.service')

const facturesControllerSql = {

    getAll_sql: async (req, res) => {
        let allFactures = await facturesServiceSql.getAll_sql()
        res.json(allFactures)
    },

    getOne_sql: async (req, res, next) => {
        let id = req.params.id

        let oneFact = await facturesServiceSql.getOne_sql(id)

        if (oneFact != undefined) {
            res.json(oneFact)
        }
        else if (oneFact.errorMessage != undefined) {
            res.locals.message = oneEmp
            next()
        }
        else {
            throw new Error("Une erreur business interne s'est produite")
        }
    },

    create_sql: async (req, res, next) => {
        if (req.body.name == undefined) {
            throw new Error("les parametre body non ok")
        }

        let newFact = {
            credit: req.body.credit,
            active: req.body.active,
            limitDate: req.body.limitDate
        }

        let newFactCreated = await facturesServiceSql.create_sql(newFact)

        res.json(newFactCreated)
    }
}
module.exports = facturesControllerSql