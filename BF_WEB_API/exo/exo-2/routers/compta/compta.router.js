const routerCompta = require("express").Router()

const comptaController = require("../../controllers/compta/compta.controller")

routerCompta
    .route("/")
    .get(comptaController.getAll)
    .post(comptaController.create)

routerCompta
    .route(":id")
    .get(comptaController.getOne)
    .get(comptaController.update)
    .put(comptaController.delete)

module.exports = routerCompta