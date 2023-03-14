let listCompta = ["comptable1", "comptable2", "comptable3", "comptable4"]

const comptaModels = {

    getAll: () => {
        return listCompta
    },

    getOne: (id) => {
        return listCompta[id]
    },

    create: (newCompta) => {
        listCompta.push(newCompta)
        return listCompta[listCompta.length - 1]
    },

    update: (id) => {
        listCompta[id] = "updated compta"
        return listCompta
    },

    delete: (id) => {
        listCompta[id] = "deleted compta"
        return listCompta
    }
}


module.exports = comptaModels