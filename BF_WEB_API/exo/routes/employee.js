const { Router } = require('express')
const router = Router()

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

router.get('/', (req, res) => {
    res.send(employeeList)
})

router.get('/:id', (req, res) => {
    const item = req.params.id

    const employeeItem = employeeList.find((g) => g.id == item)
    res.json(employeeItem)
    console.log(req.body)

})

router.post('/', (req, res) => {
    employeeList.push(req.body)
    res.send(201)
})

router.delete("/:id", (req, res) => {
    const item = req.params.id
    res.json({
        deleted: {
            item
        }
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    const employe = employeeList.find((item) => item.id == id)
    employe.salaire = 1500
    res.json(employe)
})



module.exports = router