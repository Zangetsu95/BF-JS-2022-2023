function getCinemaId(params) {
    if (params == "1") {
        return `<h1>cinema choisit : kinepolis</h1>`
    } else if (params == 2) {
        return `<h1>cinema choisit : UGC</h1>`

    } else if (params == 3) {
        return `<h1>cinema choisit : cinema anspach</h1>`

    } else if (params == 4) {
        return `<h1>cinema choisit : cinema mont des arts</h1>`

    }

}

module.exports = getCinemaId