const routerClient = require("express").Router()
const { json } = require("express")
let clientDataFile = require('../clients')
let fs = require("fs")
const { error } = require("console")

routerClient.use(json())

routerClient.get("/", (req, res) => {
    res.json(clientDataFile)
})

routerClient.get('/:id', (req, res) => {
    const id = req.params.id
    const clientId = clientDataFile.find((g) => g.id == id)
    res.json(clientId)
})

routerClient.get('/:id/commandes', (req, res) => {
    const id = req.params.id
    const clientId = clientDataFile.find((g) => g.id == id)
    res.json({
        commandes: {
            "voici les commandes ": "test"
        }
    })
})

routerClient.post("/", (req, res) => {
    console.log(clientDataFile)
    req.listenerCount

    clientDataFile.push({
        id: req.body.id
    })
    fs.writeFile("./clients.json", JSON.stringify(clientDataFile), error => console.log(error))
    res.end()
})

module.exports = routerClient