const mongoose = require('mongoose')
const { clientController, commandeController } = require("./controllers")
const { Client } = require('./models')
const ui = require('./ui')
mongoose.set("strictQuery", true)

mongoose.connect("mongodb://172.26.21.232/formation").then(_ => {

    main().catch(e => console.log(e)).finally(_ => mongoose.disconnect())
})

async function main() {


    await Client.aggregate([
        { $match: { LOCALITE: "Namur" } },
        { $group: { _id: null, nbClient: { $sum: 1 } } }
    ]).then(data => console.log(data));

    await Client.aggregate([
        { $match: { $and: [{ COMMANDES: { $exists: true } }, { COMMANDES: { $size: 1 } }] } },
        { $group: { _id: "$LOCALITE", nbClient: { $sum: 1 } } }
    ]).then(data => console.log(data))


    await Client.aggregate([
        {
            $match: {
                $or: [
                    { COMMANDES: { $exists: true } },
                    { COMPTE: { $gte: 0 } }
                ]
            }
        },
        { $group: { _id: "$LOCALITE", nbClient: { $sum: 1 } } }
    ]).then(data => console.log(data))

    await Client.aggregate([
        { $match: { COMMANDES: { $exists: true } } },
        { $unwind: "$COMMANDES" },
        { $unwind: "$COMMANDES.DETAILS" },
        { $project: { "produit": "$COMMANDES.DETAILS.PRODUCT_ID", "qcom": "$COMMANDES.DETAILS.QCOM" } }
    ]).then(data => console.log(data))

    // use("formation")
    // db.produits.aggregate([
    //     {
    //     $lookup: {
    //       from: "clients",
    //       localField: "_id",
    //       foreignField: "COMMANDES.DETAILS.PRODUCT_ID",
    //       as: "clients"
    //     }},
    //     { $project: { LIBELLE: true, clients: {NOM: true}}}
    // ])


    // await Client.aggregate([])

    // mongoose.disconnect()

    // let isContinue = true
    // do {

    //     ui.clear()
    //     const actionSelected = await ui.displayActions()
    //     await mongoose.connect("mongodb://172.26.21.232/formation")

    //     const charActionSelected = actionSelected.at(0)?.toLowerCase();

    //     switch (charActionSelected) {
    //         case '1': {
    //             const client = await clientController.findOneByName();
    //             console.log(client)
    //             break
    //         }
    //         case '2': {
    //             const clients = await clientController.findAllByLocality();
    //             console.log(clients)
    //             break
    //         }
    //         case '3': {
    //             const commandes = await commandeController.findAll();
    //             console.log(commandes)
    //             break
    //         }
    //         case '4': {
    //             const commandes = await commandeController.findAllByCustomer()
    //             console.log(commandes)
    //             break
    //         }
    //         case 'q':
    //             isContinue = false;
    //             break
    //         default:
    //             console.log("Mauvais choix")
    //             break
    //     }
    //     mongoose.disconnect()
    //     if (charActionSelected != "q") {
    //         try {
    //             isContinue = await ui.toContinue()
    //         } catch (e) {
    //             isContinue = false
    //         }
    //     }

    // } while (isContinue)



}