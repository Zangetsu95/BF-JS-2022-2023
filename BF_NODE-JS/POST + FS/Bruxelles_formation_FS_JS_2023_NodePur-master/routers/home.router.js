const homeView = require("../views/home.view")

function homeRouter(urlParams, methodHttp, res)
{
    if(methodHttp == "GET")
    {
        if(urlParams[0] == "" && urlParams[1] == "")
        {
            res.statusCode = 200
            res.write(homeView())
            res.end()
        }
    }
    else if(methodHttp == "POST")
    {

    }
    else if(methodHttp == "PATCH")
    {

    }
    else if(methodHttp == "DELETE")
    {

    }
}


module.exports = homeRouter