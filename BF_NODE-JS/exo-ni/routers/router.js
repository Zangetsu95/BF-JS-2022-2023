const url = require("url")

const contactRouter = require("./contact.router")

function router(req, res) {
    let urlParse = url.parse(req.url, true)
    let queryString = urlParse.query
    let urlParams = urlParse.pathname.split("/")
    let methodHttp = req.method

    contactRouter(urlParams, methodHttp, res)
}

module.exports = router