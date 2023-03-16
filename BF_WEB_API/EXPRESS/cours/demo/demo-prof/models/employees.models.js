/*
    C'est l'interface entre notre db et notre code JS
    elle ne sert qu'a aller chercher et traiter les demande sql
    elle renvoie les données au services pour qu'il puisse faire son BAL
*/
let listEmp = ["emp1", "emp2", "emp3", "emp4"]

const employeesModels = {
    
    getAll : () => {
        return listEmp
    },

    getOne : (id) => {
        return listEmp[id]
    },

    create : (newEmp) => {
        listEmp.push(newEmp)
        return listEmp[listEmp.length-1]
    },

    update : (id) => {
        listEmp[id] = "updated emp"
        return listEmp
    },

    delete : (id) => {
        listEmp[id] = "deleted emp"
        return listEmp
    }
}


module.exports = employeesModels