const http = require("http")
const port = process.env.PORT || 3000
const router = require("./routers/router")

const serverHttp = http.createServer((req, res) => {
    router(req, res)
})

serverHttp.listen(port, console.log(`Server Http Lancé sur le port ${port}`))
//Set-ExecutionPolicy -Scope "CurrentUser" -ExecutionPolicy "Unrestricted"