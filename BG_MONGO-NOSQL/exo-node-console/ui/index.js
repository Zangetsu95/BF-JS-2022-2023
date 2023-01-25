const readline = require('readline/promises')

require("../extensions/string.extension")

function clear() {
    console.clear()
}

async function displayActions() {
    console.log("╔════════════════════════════════════════╗")
    console.log("║                  Menu                  ║")
    console.log("╠════════════════════════════════════════╣")
    console.log("║ 1. Trouver un client par son nom       ║")
    console.log("║ 2. Afficher les clients par localité   ║")
    console.log("║ 3. Afficher les commandes              ║")
    console.log("║ 4. Afficher les commandes d'un client  ║")
    console.log("║ -------------------------------------  ║")
    console.log("║ q. Quitter                             ║")
    console.log("╚════════════════════════════════════════╝")

    const anwser = await question("Entrez votre choix: ")

    return anwser;
}

/**
 * 
 * @returns boolean
 */
async function toContinue() {
    const answer = await question("Voulez-vous continuer")

    return answer.toBoolean()
}

async function question(question) {
    const rl = readline.createInterface(process.stdin, process.stdout)

    const answer = await rl.question(`${question}: `)

    rl.close()

    return answer;
}

module.exports = {
    toContinue,
    clear,
    displayActions,
    question
}