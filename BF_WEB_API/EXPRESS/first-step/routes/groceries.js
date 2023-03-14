const { Router } = require('express')

const router = Router()

const groceryList = [
    {
        item: 'mikk',
        quantity: 2
    },
    {
        item: 'bread',
        quantity: 5
    }
]

//--------------------------------
// router.get('/', (req, res, next) => {
//     console.log("before handling request")
//     next()
// }, (req, res, next) => {
//     res.send(groceryList)
//     next()
// },
//     (req, res, next) => {
//         console.log("Finished executing GET request")
//         next()
//     },
// )

router.get('/', (req, res) => {
    res.send(groceryList)
})
//------------------------------

router.get('/:item', (req, res) => {
    // console.log(req.params.item)

    const { item } = req.params
    const groceryItem = groceryList.find((g) => g.item === item)
    res.send(groceryItem)
})

//-------------------------------
router.post('/', (req, res) => {
    console.log(req.body)
    groceryList.push(req.body)
    res.send(201)
})

module.exports = router