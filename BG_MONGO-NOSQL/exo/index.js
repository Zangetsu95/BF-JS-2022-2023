// const mongoose = require('mongoose')
import * as mongoose from 'mongoose'

main()
    .then(_ => console.log("fin"))
    .catch(err => console.log(err))

/* A function that returns a promise. */
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

    // AGREGATION ---1--- const countNamur = await Client.aggregate([
    //     {
    //         $match: {
    //             LOCALITE: "Namur"
    //         }
    //     },
    //     {
    //         $count: "count"
    //     }
    // ])
    // console.log(countNamur)
    // //*2. Afficher le nombre de clients par LOCALITE ayant effectué une
    // //*et une seule COMMANDES

    // const clientOrderOne = await Client.aggregate([
    //     {
    //         $match: {
    //             "COMMANDES": { $size: 1 }

    //         }
    //     }, {
    //         $group: {
    //             _id: "$LOCALITE",
    //             count: { $sum: 1 }
    //         }
    //     }
    // ])

    // console.log(clientOrderOne)

    //*Afficher le nombre de clients par LOCALITE ayant un compte
    //*positif ou ayant effectué une COMMANDES

    const clientPositif = await Client.aggregate([
        {
            $match: {
                $or: [
                    { "COMMANDES": { $exists: true } },
                    { "COMPTE": { $gt: 0 } }
                ]

            },
            $match: {
                "COMMANDES": { $size: 1 }
            }


        },
        {
            $group: {
                _id: "$LOCALITE",
                count: { $sum: 1 }
            }
        }
    ])

    console.log(clientPositif)

    //* Afficher dans des documents séparés, le DETAIL des
    //* COMMANDES ainsi que le NOM des clients, et le NCOM.

    // const clientDetails = await Client.aggregate([
    //     {
    //         $unwind: '$COMMANDES',
    //     },
    //     {
    //         $project: {
    //             'NOM': true,
    //             'COMMANDES': true,
    //             'NCOM': true,
    //             'DETAILS': true
    //         }
    //     }
    // ])
    // console.log(clientDetails.flatMap(it => it.COMMANDES.DETAILS))

    // * Afficher le NPROD, son LIBELLE et le(s) CLIENTS l’ayant acheté

    const clientDetails = await Client.aggregate([
        {
            $unwind: '$COMMANDES'
        },
        {
            $lookup: {
                from: 'produits',
                localField: 'LIBELLE',
                foreignField: "id",
                as: 'productKey'
            }
        },
        {
            $project: {
                'NOM': '$NOM',
                'LIBELLE': '$productKey.LIBELLE'
            }
        }
    ])

    console.log(clientDetails)
}