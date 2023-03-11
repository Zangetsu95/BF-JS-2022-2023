let listEmp = ["emp1", "emp2", "emp3", "emp4"]

const employeesModels = {

    getAll: () => {
        return listEmp
    },

    getOne: (id) => {
        return listEmp[id]
    },

    create: (newEmp) => {
        listEmp.push(newEmp)
        return listEmp[listEmp.length - 1]
    },

    update: (id) => {
        listEmp[id] = "updated emp"
        return listEmp
    },

    delete: (id) => {
        listEmp[id] = "deleted emp"
        return listEmp
    }
}


module.exports = employeesModels