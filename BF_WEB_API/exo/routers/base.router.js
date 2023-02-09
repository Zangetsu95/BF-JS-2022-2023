const express = require("express")
const router = express.Router()

const routerEmployees = require("./employees.router")
const routerCompta = require("./compta.router")
const routerClient = require("./clients.router")

router.use("/employees", routerEmployees)
router.use("/compta", routerCompta)
router.use("/clients", routerClient)


module.exports = router