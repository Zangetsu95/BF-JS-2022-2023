const routerGenre = require("express").Router()
const genreController = require("../controllers/genre.controller")

routerGenre.route("/")
    .get(genreController.getAll)
    .post(genreController.add)

routerGenre.route("/:id([0-9]+)")
    .get(genreController.getOneById)

routerGenre.route("/search/:name([a-zA-Z]+)")
    .get(genreController.searchByName)

module.exports = routerGenre