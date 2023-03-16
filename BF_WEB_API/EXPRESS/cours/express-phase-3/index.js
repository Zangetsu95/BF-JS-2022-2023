const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const sql = require('mssql')
const config = require('./config/config.json')

const pool = new sql.ConnectionPool(config.dbConfig)
const poolConnect = pool.connect()

poolConnect.then(() => {
    console.log('Connected to database')
}).catch((err) => {
    console.log('Database connection failed: ', err)
})

app.use(express.json())

const routerBase = require("./routers/base.router")
app.use("/api/v1", routerBase)

app.all("*", (req, res, next) => {
    if (res.locals.message != undefined) {
        responseError = {
            Message: res.locals.message,
            ErrorCode: 404
        }
    }
    res.status(404).json(responseError)
})

app.use((error, req, res, next) => {
    console.log("Error URL : ", req.url)
    console.log("Error Message : " + error)
    res.status(500).json({ "Error": req.url, "Message": "" + error, "ErrorCode": 500 })
})

app.get('/users', (req, res) => {
    const request = pool.request()
    request.query('SELECT * FROM compta', (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error retrieving users from database')
        } else {
            res.send(result.recordset)
        }
    })
})

app.listen(port, console.log(`Server started on port ${port}`))