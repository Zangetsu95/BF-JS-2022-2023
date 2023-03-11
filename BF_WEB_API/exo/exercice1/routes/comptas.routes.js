const express = require('express');
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
    const factures = db.factures

    res.json(factures)
})

router.get('/:id', (req, res) => {
    const id =req.params.id
    const facture = db.factures.find(facture => facture.id == id)

    if(facture) {
        res.json(facture)
    }

    res.status(404)
    res.send('pas de facture')

})

module.exports = router