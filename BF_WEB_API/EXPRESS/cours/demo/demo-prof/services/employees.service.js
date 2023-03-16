const employeesModels = require("../models/employees.models")

/*
    Service recois le travail du controller
    contact son models pour avoir les datas en db
    manipule le coté BUSINESS totalement 
    et renvoi au controller les données demandées traîtée en mode business
*/
const employeesService = {
    
    getAll : () => {
        let allEmp = employeesModels.getAll()
        //BAL
        allEmp = allEmp.reverse()
        return allEmp
    },

    getOne : (id) => {
        let oneEmp = employeesModels.getOne(id)
        //BAL
        return oneEmp
    },

    create : (newEmp) => {
        let newEmpCreated = employeesModels.create(newEmp)
        //BAL
        return newEmpCreated
    },

    update : (id) => {
        let upEmp = employeesModels.update(id)
        //BAL       
        return upEmp
    },

    delete : (id) => {
        let firedEmp = employeesModels.delete(id)
        //BAL
        return firedEmp
    }
}


module.exports = employeesService