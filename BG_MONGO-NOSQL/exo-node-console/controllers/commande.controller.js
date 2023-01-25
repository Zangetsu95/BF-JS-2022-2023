const ui = require('../ui')
const { clientRepository } = require("../repositories")

async function findAll() {
    ui.clear()

    const localite = await ui.question("Entrer la localite (laisser vide pour tous)")
    let clients = []
    if (localite) {
        clients = await clientRepository.findAllByLocalite(localite, { COMMANDES: true })
    } else {
        clients = await clientRepository.findAll({}, { COMMANDES: true })
    }

    return clients
        .filter(it => it.COMMANDES.length > 0)
        .flat()
        .flatMap(it => it.COMMANDES)
}

async function findAllByCustomer() {
    ui.clear()

    const name = await ui.question("Entrer le nom du client")
    const client = await clientRepository.findOneByName(name, { COMMANDES: true })

    if (client) {
        return client.COMMANDES
    }

    return []
}

module.exports = {
    findAll,
    findAllByCustomer
}