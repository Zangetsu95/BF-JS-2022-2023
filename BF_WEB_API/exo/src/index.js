//*Environnement */
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//*Import routes */
const employeeRoute = require('../routes/employee')


app.use(express.json())
// app.use(express.urlencoded)
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`)
    next()
})


//**Url for employee*/
app.use('/api/v1/employee', employeeRoute)


app.listen(port, console.log(`Le server express est lancé sur le port ${port}`)) 