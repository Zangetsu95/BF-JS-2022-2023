const getHtml = require("../views/contact.view")

function contactRouter(urlParams, methodHttp, res) {

    if (urlParams[0] == "" && urlParams[1] == "contact") {

        if (methodHttp == "GET") {
            res.write(getHtml())
            res.end()
        }
    }

}
module.exports = contactRouter