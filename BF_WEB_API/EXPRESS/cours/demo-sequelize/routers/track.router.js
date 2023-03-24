const routerTrack = require("express").Router()
const trackController = require("../controllers/track.controller")

routerTrack.route("/")
    .get(trackController.getAll)

routerTrack.route("/:id([0-9]+)")
    .get(trackController.getOneById)


module.exports = routerTrack