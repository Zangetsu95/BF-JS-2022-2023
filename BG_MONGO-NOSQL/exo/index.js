// const mongoose = require('mongoose')
import * as mongoose from 'mongoose'

main()
    .then(_ => console.log("fin"))
    .catch(err => console.log(err))

async function main() {
    await mongoose.connect("mongodb://172.26.21.232/formation")

    const ClientSchema = new mongoose.Schema({
        "CLIENT_ID": String,
        "NOM": String,
        "ADRESSE": String,
        "LOCALITE": String,
        "CAT": String,
        "COMPTE": Number
    })

    const Client = mongoose.model("Clients", ClientSchema)

    // const amine = new Client({
    //     CLIENT_ID: "BE26"
    // })

    // await amine.save()

    // Client.find({ "CLIENT_ID": "BE12" }, {}, (err, clients) => {
    //     clients.forEach(client => console.log(client))
    // })

    //1----- Client.find({ LOCALITE: 'Toulouse' }, 'NOM ADRESSE', (err, clients) => {

    //     clients.forEach(client => console.log(client))
    // })

    // 2------Client.find({ LOCALITE: 'Poitiers' }, 'NOM COMPTE COMMANDES', (err, clients) => {

    //     clients.forEach(client => console.log(client))
    // })

    //3---- Client.find({}, { CAT: 0 }, (err, clients) => {

    //     clients.forEach(client => console.log(client))
    // })



}