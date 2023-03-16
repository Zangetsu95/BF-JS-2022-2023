const express = require('express')
const router = require('./routes/router')

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use('/api/v1', router)


app.use((err, req, res, next) => {
    console.log(err)
    res.status(500)
})

app.listen(port, console.log('Le serveur est lancer'))