// /category/15/product/155 tester l'url

function productRouter(urlParams, res) {
    if (urlParams[1] == "category") {

        if (urlParams[2] != undefined) {

            let categId = parseInt(urlParams[2])

            if (!isNaN(categId)) {

                //ici mon categid peut aller chercher ses infos dans la db
                if (urlParams[3] == "product") {

                    if (urlParams[4] != undefined) {

                        let productId = parseInt(urlParams[4])

                        if (!isNaN(productId)) {

                            res.writeHead(200, "voici votre produit").end()
                        }
                        else
                            res.writeHead(404, "ce produit n'existe pas ").end()
                    }
                    else
                        res.writeHead(404, "le product id n'est pas définit ").end()
                }
                else
                    res.writeHead(404, "Cette page n'existe pas  ").end()
            }
            else
                res.writeHead(404, "cette categorie n'existe pas  ").end()
        }
        else
            res.writeHead(404, "la category id n'est pas définit ").end()
    }
    res.writeHead(404, "error : page not found").end()
}

module.exports = productRouter