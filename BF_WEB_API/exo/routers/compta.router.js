const routerCompta = require("express").Router()
const { json } = require("express")
let comptaDataFile = require('../compta')
let comptaData = comptaDataFile.comptaData

routerCompta.use(json())

routerCompta.get("/", (req, res) => {
    res.json(comptaData)
})

routerCompta.get("/:id", (req, res) => {
    const id = req.params.id

    const comptaId = comptaData.find((g) => g.id == id)
    res.json(comptaId)
})

routerCompta.post("/", (req, res) => {
    comptaData.push(req.body)
    res.status(201).json({
        message: "nouvelle facture crée !"
    })
})

routerCompta.put("/:id", (req, res) => {
    const id = req.params.id
    const compta = comptaData.find((item) => item.id == id)
    compta.bill = 01010101
    res.json(compta)
})

routerCompta.delete('/:id', (req, res) => {
    const item = req.params.id
    res.json({
        deleted: {
            item
        }
    })
})


module.exports = routerCompta