const { Client } = require("../models");


async function findAll(select = {}, project = {}) { return Client.find(select, project) }
async function findOne(select = {}, project = {}) { return Client.findOne(select, project) }


async function findOneByName(name, project = {}) { return findOne({ NOM: { $regex: name, $options: 'i' } }, project) }
async function findAllByLocalite(localite, project = {}) { return findAll({ LOCALITE: { $regex: localite, $options: 'i' } }, project) }


async function save(client) {
    try {
        return await client.save();
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    findAll,
    findOneByName,
    findAllByLocalite,
    save
}