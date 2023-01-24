const mongoose = require('mongoose')
const clientRepository = require('./repositories/client.repository')
const ui = require('./ui/ui')


main().catch(e => console.log(e))

async function main() {
    await mongoose.connect("mongodb://172.26.21.232/formation")

    const actionSelected = await ui.displayActions();

    switch (actionSelected) {
        case '1':
            const name = await ui.question("Entrer le nom")
            const client = await clientRepository.findOneByName(name)
            console.log(client)
            break
        case '2':
            const locality = await ui.question("Entrer la localite")
            const clients = await clientRepository.findAllByLocalite(locality)
            clients.forEach(c => console.log(c))
            break
        case '3':
            const id = await ui.question("Entrez l'ID du client")
            const clientId = await clientRepository.findById(id)
            clientId.forEach(c => console.log(c))
            break
    }

    mongoose.disconnect()
}