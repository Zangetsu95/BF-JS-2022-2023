const http = require("http")
const url = require("url")

const port = process.env.PORT || 3000

const serverHttp = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)

    let urlParse = url.parse(req.url, true).pathname



    if (req.method == "GET") {
        if (urlParse.includes("/users")) {
            if (urlParse.includes("/users/wishlist")) {
                res.writeHead(200, "Ok voilà la page whishlist")
                res.end()
            }
            else if (urlParse.includes("/users/contact")) {
                res.writeHead(200, "Ok voila la page de contact")
                res.end()
            }
            else {
                res.writeHead(200, "Voila ta page profil")
                res.end()
                //retourne la page profil
            }
            res.writeHead(404, "Page not found")
            res.end()
        }
        else {
            if (urlParse.includes("/categories")) {
                if (urlParse.includes("/categories/products")) {
                    if (urlParse.includes("/categories/products/details")) {
                        res.writeHead(200, "Page de détails product")
                        res.end()
                    }

                    res.writeHead(200, "Page de products of category")
                    res.end()
                }

                res.writeHead(200, "Page de categories")
                res.end()
            }

            res.writeHead(404, "Page not found")
            res.end()
        }
    }
    else if (req.method == "POST") {
        if (urlParse.includes("/user/createProduct")) {
            res.writeHead(201, "Product Created")
            res.end()
        }

        res.writeHead(404, "Page not found")
        res.end()

        //l'user donne des infos, à créer en bsd
    }
    else if (req.method == "PATCH") {
        if (urlParse.includes("/user/updateProduct")) {
            res.writeHead(201, "Product Updated")
            res.end()
        }

        res.writeHead(404, "Page not found")
        res.end()
        //l'user demande une update d'infos en bsd
    }
    else if (req.method == "DELETE") {
        if (urlParse.includes("/user/deleteProduct")) {
            res.writeHead(201, "Product Deleted")
            res.end()
        }

        res.writeHead(404, "Page not found")
        res.end()
        //l'user demande une suppression d'une infos en bsd
    }
    else {
        res.writeHead(405, "Method not allowed")
        res.end()
    }
})

serverHttp.listen(port, console.log(`Server Http Lancé sur le port ${port}`))
//Set-ExecutionPolicy -Scope "CurrentUser" -ExecutionPolicy "Unrestricted"