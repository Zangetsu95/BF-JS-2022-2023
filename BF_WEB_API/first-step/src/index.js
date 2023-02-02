const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded)
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`)
    next()
})


app.listen(PORT, () => console.log(`runing express at port ${PORT} `))

const groceryList = [
    {
        item: 'mikk',
        quantity: 2
    },
    {
        item: 'bread',
        quantity: 5
    }]

//--------------------------------
// app.get('/groceries', (req, res, next) => {
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

app.get('/groceries', (req, res) => {
    res.send(groceryList)
})
//------------------------------

app.get('/groceries/:item', (req, res) => {
    // console.log(req.params.item)

    const { item } = req.params
    const groceryItem = groceryList.find((g) => g.item === item)
    res.send(groceryItem)
})

//-------------------------------
app.post('/groceries', (req, res) => {
    console.log(req.body)
    groceryList.push(req.body)
    res.send(201)
})


