const { Schema, model } = require('mongoose')

const DetailSchema = new Schema({
    "PRODUCT_ID": { type: String, required: true },
    "QCOM": { type: Number, required: true, min: 1 }
})
const CommandeSchema = new Schema({
    "NCOM": { type: Number, required: true },
    "DATE_COM": { type: Date, required: true },
    "DETAILS": { type: [DetailSchema], required: true }
})
const ClientSchema = new Schema({
    "CLIENT_ID": { type: String, required: true },
    "NOM": { type: String, required: true, unique: true },
    "ADRESSE": { type: String, required: true },
    "LOCALITE": { type: String, required: true },
    "CAT": String,
    "COMPTE": Number,
    "COMMANDES": [CommandeSchema]
})

const Client = model("Clients", ClientSchema)

module.exports = Client