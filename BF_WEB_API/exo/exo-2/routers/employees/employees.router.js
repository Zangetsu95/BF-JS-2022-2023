const routerEmployees = require('express').Router()

const employeesController = require("../../controllers/employees/employees.controller")

routerEmployees
    .route("/")
    .get(employeesController.getAll)
    .post(employeesController.create)


routerEmployees
    .route("/:id")
    .get(employeesController.getOne)
    .put(employeesController.update)
    .delete(employeesController.delete)

module.exports = routerEmployees