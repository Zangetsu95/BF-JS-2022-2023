const router = require("express").Router()

const routerTrack = require("./track.router")
const routerArtist = require("./artist.router")
const routerGenre = require("./genre.router")

router.use("/track", routerTrack)
router.use("/artist", routerArtist)
router.use("/genre", routerGenre)

module.exports = router