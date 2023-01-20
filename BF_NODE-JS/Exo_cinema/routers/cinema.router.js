//      /category/15/product/155 tester URL

function productRouter(urlParams, methodHttp, res) {

    if (methodHttp == "GET") {
        if (urlParams[1] == "cinema") {
            res.writeHead(200, "voici les cinemas de bruxelles").end()


        }
    }
    else if (methodHttp == "POST") {

    }
    else if (methodHttp == "PATCH") {

    }
    else if (methodHttp == "DELETE") {

    }
    else
        res.writeHead(405, "Method not allowed").end()
}


module.exports = productRouter