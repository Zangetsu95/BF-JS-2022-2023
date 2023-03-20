const routerFacturesSql = require('express').Router()
const facturesControllerSql = require('../controllers/factures.sql.controller')

routerFacturesSql
    .route("/")
    .get(facturesControllerSql.getAll_sql)
    .post(facturesControllerSql.create_sql)

routerFacturesSql
    .route("/:id")
    .get(facturesControllerSql.getOne_sql)


module.exports = routerFacturesSql