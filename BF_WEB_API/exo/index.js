const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const routerBase = require("./routers/base.router")
app.use("/api/v1", routerBase)
app.use(express.json())
app.all("*", (req, res, next) => {
    res.json({ error: "404" })
})


app.listen(port, console.log(`server start in port ${port}`))