const url = require("url")

const productRouter = require("./cinema.router")
const homeRouter = require("./home.router")

function router(req, res) {
    let urlParse = url.parse(req.url, true)
    let queryString = urlParse.query
    let urlParams = urlParse.pathname.split("/")
    let methodHttp = req.method


    homeRouter(urlParams, methodHttp, res)
    productRouter(urlParams, methodHttp, res)


    res.writeHead(404, "Error : Page not found").end()
}

module.exports = router