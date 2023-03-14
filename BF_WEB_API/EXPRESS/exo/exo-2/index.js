
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const routerBase = require("./routers/base.router")

app.use("/api/v1", routerBase)


app.all("*", (req, res, next) => {
    res.json({ error: "404" })
})


app.use((error, req, res, next) => {
    console.log("Error : ", req.url)
    console.log(error)
    res.status(500).json({ "Error": '' })
})



app.listen(PORT, console.log(`serveur lance sur le port ${PORT}`))