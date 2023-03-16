const express = require("express")
const router = express.Router()

const routerEmployees = require("./employees.router")

router.use("/employees", routerEmployees)



module.exports = router