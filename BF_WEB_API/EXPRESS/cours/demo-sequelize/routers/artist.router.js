const routerArtist = require("express").Router()
const artistController = require("../controllers/artist.controller")

routerArtist.route("/")
    .get(artistController.getAll)
    .post(artistController.add)

routerArtist.route("/:id([0-9]+)")
    .get(artistController.getOneById)
    .put(artistController.update)
    .delete(artistController.delete)


module.exports = routerArtist