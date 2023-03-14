let listFact = ["fact1", "fact2", "fact3", "fact4"]

const comptaModels = {
    
    getAll : () => {
        return [...listFact]
    },

    getOne : (id) => {
        return listFact[id]
    },

    create : (newFact) => {
        listFact.push(newFact)
        return listFact[listFact.length-1]
    },

    update : (id) => {
        listFact[id] = "updated fact" + (parseInt(id)+1)
        return [...listFact]
    },

    delete : (id) => {
        listFact[id] = "deleted fact" + (parseInt(id)+1)
        return [...listFact]
    }
}


module.exports = comptaModels