const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json()) //permet de traiter le body du corp écris et converti en json utilisable

/*-----------DB--------------- */

let { testDbConnection } = require('./models/db')
testDbConnection()




/*-----------Middleware--------------- */
/* A middleware that is executed when the route is not found. */
app.all("*", (req, res, next) => {

    if (res.locals.message != undefined) {
        responseError = {
            Message: res.locals.message,
            ErrorCode: 404
        }
    }

    res.status(404).json(responseError)
})

/* A middleware that is executed when an error occurs. */
app.use((error, req, res, next) => {
    console.log("Error URL : ", req.url)
    console.log("Error Message : " + error)
    res.status(500).json({ "Error": req.url, "Message": "" + error, "ErrorCode": 500 })
})
/*------------SERVER START-------------- */

app.listen(port, console.log(`server start in port ${port}`))