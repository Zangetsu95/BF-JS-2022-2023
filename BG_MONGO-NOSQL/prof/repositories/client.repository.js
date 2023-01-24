const Client = require("../models/client.model");


async function findAll(select = {}, project = {}) { return Client.find(select, project) }
async function findOne(select = {}, project = {}) { return Client.findOne(select, project) }


async function findOneByName(name, project = {}) { return findOne({ NOM: { $regex: name, $options: 'i' } }, project) }
async function findAllByLocalite(localite, project = {}) { return findAll({ LOCALITE: { $regex: localite, $options: 'i' } }, project) }
async function findById(id, project = {}) { return findAll({ CLIENT_ID: { $regex: id, $options: 'i' } }, project) }
async function save(client) {
    try {
        return await client.save();
    } catch (e) { console.log(e.message); }
}

module.exports = {
    findOneByName,
    findAllByLocalite,
    findById,
    save
}