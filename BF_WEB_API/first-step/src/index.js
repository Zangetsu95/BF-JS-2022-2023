const express = require('express')
const groceriesRoute = require('../routes/groceries')
const marketsRoute = require('../routes/markets')


const app = express()
const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded)
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`)
    next()
})

app.use('/api/groceries', groceriesRoute)

app.use('/api/market', marketsRoute)


app.listen(PORT, () => console.log(`runing express at port ${PORT} `))





