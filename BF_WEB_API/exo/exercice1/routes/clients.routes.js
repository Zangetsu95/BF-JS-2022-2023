const express = require('express');
const db = require('../db/db')

const router = express.Router()

router.get("/", async (req, res) => {
    const clients = db.clients
    const database = getDb()
    console.log(database.collection('clients').find({}));
    res.json(clients)
})

router.post('/', (req, res) => {
    const client = {
        id: db.clients[db.clients.length-1].id +1,
        nom: req.body.name,
        commandes: []
    }

    db.clients.push(client)
    res.json(db.clients)
})

router.get('/:id', (req, res) => {
    const client = db.clients.find(client => client.id == req.params.id)
    if(client){
        res.json(client)
    } 

    res.status(404)
    res.send('client non trouver')
})


router.put('/:id', (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const client = db.clients.find(client => client.id == id)

    if(client && name){
        client.nom = name
        console.log(db.clients)
        res.json(client)
    }else{
        res.status(404)
        res.send('client non trouver')
    }

})

router.delete('/:id',(req, res) => {
    const clientsFiltrer = db.clients.filter(client => client.id != req.params.id)
    const clientLicensier = db.clients.find(client => client.id == req.params.id)
    db.clients = clientsFiltrer

    console.log(db.clients)

    if(clientLicensier){
        res.json(clientLicensier)
        return
    } 

    res.status(404)
    res.send('client non trouver')
} )

router.get('/:id/commandes', (req, res) => {
    const id = req.params.id
    const client = db.clients.find(client => client.id == id)
    if(client){
        const commandes = client.commandes
        if(commandes.length !== 0){
            res.json(commandes)
        } else {
            res.send('pas de commandes trouver')
        }
    }else {        
        res.status(404)
        res.send('pas de client trouver')
    }

})

router.post('/:id/commandes', (req, res) => {
    const id = req.params.id
    const facture = req.body.facture
    const client = db.clients.find(client => client.id == id)
    if(client && facture){
        const commande = {
            id : client.commandes[client.commandes.length-1].id +1,
            facture : facture
        }
        client.commandes.push(commande)
        res.json(client)        
    }else {        
        res.status(404)
        res.send('pas de client trouver')
    }

})

router.get('/:clientId/commandes/:commandeId', (req, res) => {
    const clientId = req.params.clientId
    const commandeId = req.params.commandeId
    const client = db.clients.find(client => client.id == clientId)
    if(client){
        const commande = client.commandes.find(commande => commande.id == commandeId)
        if(commande){
            res.json(commande)
        } else {
            res.send('pas de commande trouver')
        }
    }else {        
        res.status(404)
        res.send('pas de client trouver')
    }
})

router.put('/:clientId/commandes/:commandeId', (req, res) => {
    const clientId = req.params.clientId
    const commandeId = req.params.commandeId
    const facture = req.body.facture
    const client = db.clients.find(client => client.id == clientId)
    if(client){
        const commande = client.commandes.find(commande => commande.id == commandeId)
        if(commande && facture){
            commande.facture = facture
            res.json(commande)
        } else {
            res.send('pas de commande trouver')
        }
    }else {        
        res.status(404)
        res.send('pas de client trouver')
    }
})

router.delete('/:clientId/commandes/:commandeId', (req, res) => {
    const clientId = req.params.clientId
    const commandeId = req.params.commandeId
    const client = db.clients.find(client => client.id == clientId)
    if(client){
       const commandesFiltrer = client.commandes.filter(commande => commande.id != commandeId)
       if(commandesFiltrer.length < client.commandes.length){
        client.commandes = commandesFiltrer
        res.json(client.commandes)
       }else{
         res.send('pas de commande trouver')
       }
    }else {        
        res.status(404)
        res.send('pas de client trouver')
    }
})


module.exports = router