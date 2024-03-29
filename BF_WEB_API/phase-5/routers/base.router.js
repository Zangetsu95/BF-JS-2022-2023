const express = require("express")
const router = express.Router()

const routerEmployees = require("./employees.router")
const routerEmployeesSql = require("./employees.sql.router")
const routerComptas = require("./comptas.router")
const routerClients = require("./clients.router")
const routerFactureSql = require('./factures.sql.router')

router.use("/employees", routerEmployees)
router.use("/employeesSql", routerEmployeesSql)
router.use("/comptas", routerComptas)
router.use("/clients", routerClients)
router.use("/factures", routerFactureSql)

module.exports = router