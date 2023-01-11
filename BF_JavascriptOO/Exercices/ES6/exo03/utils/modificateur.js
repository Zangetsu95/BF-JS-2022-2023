/**
 * Fonction de bonus / malus en fonction d'une statistique
 * @param {number} stats La statistique
 * @returns {number} Bonus / malus
 */
function modificateur(stats) {

    // if (stats < 5) return -1
    // else if (stats < 10) return 0
    // else if (stats < 15) return 1
    // else return 2

    return stats < 5 ? -1 : stats < 10 ? 0 : stats < 15 ? 1 : 2

}

export default modificateur