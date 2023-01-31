const url = require("url")

const productRouter = require("./product.router")
const homeRouter = require("./home.router")
const contactRouter = require("./contact.router")

function router(req, res)
{
    let urlParse = url.parse(req.url, true)
    let queryString = urlParse.query
    let urlParams = urlParse.pathname.split("/")
    let methodHttp = req.method

    if(methodHttp == "GET" && urlParams[1] == "favicon.ico"){
        res.end()
    } 

    homeRouter(urlParams, methodHttp, res)
    productRouter(urlParams, methodHttp, res)
    contactRouter(urlParams, methodHttp, res, req)
}

module.exports = router