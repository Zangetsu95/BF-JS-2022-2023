const routerEmployees = require("express").Router()
// same que dans base router but en plus court
//on oublie pas le chainage d'appel de fonctions...

const employeeList = [
    {
        id: 1,
        name: "amine",
        salaire: 500
    },
    {
        id: 2,
        name: "pepito",
        salaire: 500
    },
    {
        id: 3,
        name: "monsieur ô papy",
        salaire: 500
    }
]

// routerEmployees
//     .route("/")
//     .get((req, res) => {
//         res.json({ route: "get all" })
//     })
//     .post((req, res) => {
//         res.json({ route: "create one" })
//     })


// routerEmployees
//     .route("/:id")
//     .get((req, res) => {
//         res.json({ route: "get one" })
//     })
//     .put((req, res) => {
//         res.json({ route: "update one" })
//     })
//     .delete((req, res) => {
//         res.json({ route: "delete one" })
//     })




routerEmployees.get("/", (req, res, next) => {
    // res.json({ route: "get all" })
    res.json(employeeList)
})
routerEmployees.get("/:id", (req, res, next) => {
    // res.json({ route: "get one" })
    const item = req.params.id

    const employeeItem = employeeList.find((g) => g.id == item)
    res.json(employeeItem)
    console.log(req.body)
})
routerEmployees.post("/", (req, res, next) => {
    // res.json({ route: "create one" })
    employeeList.push(req.body)
    res.status(201).json({
        message: 'Objet créé !'
    });
})
routerEmployees.put("/:id/salary", (req, res, next) => {
    // res.json({ route: "update one" })
    const id = req.params.id
    const employe = employeeList.find((item) => item.id == id)

    if (req.query) {
        if (req.query.add) {
            employe.salaire += parseInt(req.query.add)
        }
    }



    // employe.salaire = 1500

    res.json(employe)
})
routerEmployees.delete("/:id", (req, res, next) => {
    // res.json({ route: "delete one" })
    const item = req.params.id
    res.json({
        deleted: {
            item
        }
    })
})



module.exports = routerEmployees