const ui = require('../ui')
const { clientRepository } = require("../repositories")


async function findOneByName() {
    ui.clear()
    const name = await ui.question("Entrer le nom")
    return await clientRepository.findOneByName(name)
}

async function findAllByLocality() {
    ui.clear()
    const locality = await ui.question("Entrer la localite")
    return await clientRepository.findAllByLocalite(locality)
}

module.exports = {
    findOneByName,
    findAllByLocality
}