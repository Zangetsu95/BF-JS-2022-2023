const express = require('express')
const router = express.Router()

const routerEmployees = require('./employees/employees.router')
const routerCompta = require('./compta/compta.router')

router.use("/employees", routerEmployees)
router.use("/compta", routerCompta)

module.exports = router