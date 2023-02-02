const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded)


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
app.get('/groceries', (req, res) => {
    res.send(groceryList)
})

//-------------------------------
app.post('/groceries', (req, res) => {
    console.log(req.body)
    groceryList.push(req.body)
    res.send(201)
})
