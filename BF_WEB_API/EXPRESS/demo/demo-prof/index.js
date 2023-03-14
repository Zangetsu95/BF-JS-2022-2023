const express = require("express")
const app = express()
const port = process.env.PORT || 3000


app.use(express.json()) //permet de traiter le body du corp écris et converti en json utilisable
/* remember :) before use that fucking shit */
/*
let body = ""
req.on("data", (buffer) => {
    body += buffer.toString()
})

req.on("end", () => {
    let okBody = parse(body)
*/

const routerBase = require("./routers/base.router")
app.use("/api/v1", routerBase)



app.all("*", (req, res, next) => {
    res.json({ error : "404"})
})


app.use((error, req, res, next) => {
    console.log("Error : ", req.url)
    console.log(error)
    res.status(500).json({ "Error" : ''})
})



app.listen(port, console.log(`server start in port ${port}`))