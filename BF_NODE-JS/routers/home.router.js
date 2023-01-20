//      /category/15/product/155 tester URL

function productRouter(urlParams, methodHttp, res) {

    if (methodHttp == "GET") {
        if (urlParams[1] == "category") {
            if (urlParams[2] != undefined) {
                let categId = parseInt(urlParams[2])
                if (!isNaN(categId)) {
                    //ici mon categ id peux aller chercher ses infos dans la db
                    if (urlParams[3] == "product") {
                        if (urlParams[4] != undefined) {
                            let productId = parseInt(urlParams[4])
                            if (!isNaN(productId)) {
                                //ici on peux aller chercher le infos du produit dans la db
                                res.writeHead(200, "Voici votre produit").end()
                            }
                            else
                                res.writeHead(404, "Ce produit n'existe pas").end()
                        }
                        else
                            res.writeHead(404, "Le product id n'est pas défini").end()
                    }
                    else
                        res.writeHead(404, "Cette page n'existe pas").end()
                }
                else
                    res.writeHead(404, "Cette catégorie n'existe pas").end()
            }
            else
                res.writeHead(404, "La category id n'est pas défini").end()

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