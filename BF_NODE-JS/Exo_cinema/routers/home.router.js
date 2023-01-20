const cinemaView = require("../views/cinema.view")
const cinemaId = require("../views/cinema_id.view")

function homeRouter(urlParams, methodHttp, res) {
    if (methodHttp == "GET") {
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" })

        if (urlParams[0] == "" && urlParams[1] == "cinema" && urlParams[2] == "1") {
            res.write(cinemaId(urlParams[2]))
            res.end()

            // Appeler une autre function() avec id en param
            // la faire les différentes routes

        } else if (urlParams[0] == "" && urlParams[1] == "cinema" && urlParams[2] == "2") {
            res.write(cinemaId(urlParams[2]))
            res.end()
        } else if (urlParams[0] == "" && urlParams[1] == "cinema" && urlParams[2] == "3") {
            res.write(cinemaId(urlParams[2]))
            res.end()
        }

        else {
            (urlParams[0] == "" && urlParams[1] == "cinema" && urlParams[2] == undefined)
            res.write(cinemaView())
            res.end()
        }



    }
    else if (methodHttp == "POST") {

    }
    else if (methodHttp == "PATCH") {

    }
    else if (methodHttp == "DELETE") {

    }
}


module.exports = homeRouter