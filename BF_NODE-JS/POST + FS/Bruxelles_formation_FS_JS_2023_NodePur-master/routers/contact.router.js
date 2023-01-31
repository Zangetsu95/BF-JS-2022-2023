const contactView = require("../views/contact.view")
const fourOfourView = require("../views/fourOfour.view")
const { parse } = require("querystring")
const fs = require("fs")


function contactRouter(urlParams, methodHttp, res, req)
{
    if(urlParams[0] == "" && urlParams[1] == "contact")
    {
        if(methodHttp == "GET")
        {
                res.write(contactView())
                res.end()
                
        }
        else if(methodHttp == "POST")
        {
            let body = ""
            req.on("data", (buffer) => {
                body += buffer.toString()
            })

            req.on("end", () => {
                let okBody = parse(body)
                //FileSystem

                /*
                Flags
                    r Ouverture en lecture seule (exception si le fichier n’existe pas) 
                    r+ Ouverture en lecture/écriture (exception si le fichier n’existe pas) 
                    rs Ouverture en lecture seule en mode synchrone 
                    rs+ Ouverture en lecture/écriture en mode synchrone 
                    w Ouverture en écriture (le fichier est créé si il n’existe pas ou vidé si il existe) 
                    wx Ouverture en écriture (le fichier est créé si il n’existe pas ou échec si il existe)
                    w+ Ouverture en écriture/lecture (le fichier est créé si il n’existe pas ou vidé si il existe) 
                    wx+ Ouverture en écriture/lecture (le fichier est créé si il n’existe pas ou échec si il existe)
                    a Permet d’ajouter du contenu à un fichier (créé si le fichier n’existe pas) 
                    ax Permet d’ajouter du contenu à un fichier (Exception si le fichier n’existe pas) 
                    a+ Permet de lire et d’ajouter du contenu à un fichier (créé si le fichier n’existe pas) 
                    ax+ Permet lire et d’ajouter du contenu à un fichier (Exception si le fichier n’existe pas)
                */
               //on oublie pas de prendre le path absolu et pas relatif
               //si votre main.js est dans la racine du folder, ! alors ./QUELQUECHOSE/DATAFILES
               //toujours par rapport au file main ! la ou a été fait le tout premier require de router et tout et tout
                fs.stat("./datas/faq", (error, stats) => {
                    if(error != null){
                        //console.log(error)
                        res.statusCode = 404
                        res.end()
                        return //attention a cette façon de travailler, elle kill uniquement la method fs.read! 
                        //il faut faire attention au prochain match de route de node !!!
                    }
                    // console.log(stats)
                    // console.log(stats.isFile())
                    // console.log(stats.isDirectory())
                })


                fs.readFile("./datas/faq", (error, datas) => {
                    if(error != null){
                        res.statusCode = 404
                        res.end()
                        return
                    }

                    //console.log(datas.toString())
                    //a partir de ici j'en fait ce que je veux de ces datas
                })

                fs.readdir("./views", (error, datas) => {
                    if(error != null){
                        res.statusCode = 404
                        res.end()
                        return
                    }

                    //console.log(datas)
                })

                fs.mkdir("./testMkDir", (error) => {
                    if(error != null){
                        res.statusCode = 404
                        res.end()
                        return
                    }

                    //undefined si folder créé
                    //console.log()
                })

                fs.rmdir("./testMkDir", (error) => {
                    if(error != null){
                        res.statusCode = 404
                        res.end()
                        return
                    }
                })

                //méthode propre pour lire et ajouter ! mais longue...
                data = fs.readFileSync("./datas/faq").toString()
                fs.writeFile("./datas/faq", `${data} un bout de texte classique\n`, (error) => {
                    if(error != null){
                        res.statusCode = 404
                        res.end()
                        return
                    }
                })

                //méthode toute faite pour écrire en plus dans le fichier sans deleter MAIS aucun contrôle sur le content existant
                fs.appendFile("./datas/faq", "ce que tu veux ajouter après\n", (error) => {
                    if(error != null){
                        res.statusCode = 404
                        res.end()
                        return
                    }
                })


                fs.truncate("./datas/faq", (error) => {
                    if(error != null){
                        res.statusCode = 404
                        res.end()
                        return
                    }
                })




                //let result = fs.mkdirSync("./testMkDirSYNC")
                //console.log(result)


                //marche bien si on est totltament sur a 1000% que le file exist !!!
                //let datas = fs.readFileSync("./datas/faqm")
                //console.log(datas.toString())


                res.statusCode = 200
                res.setHeader('Location' , "/")
                res.end()
            })
        }
        else if(methodHttp == "PATCH")
        {

        }
        else if(methodHttp == "DELETE")
        {

        }
    }
}


module.exports = contactRouter