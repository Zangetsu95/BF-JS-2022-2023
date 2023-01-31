        //      /category/15/product/155 tester URL

const categListView = require("../views/categoryList.view")
const categDetailsView = require("../views/categoryDetails.view")
const fourOfourView = require("../views/fourOfour.view")
const productView = require("../views/product.view")

function productRouter(urlParams, methodHttp, res)
{

    if(methodHttp == "GET")
    {
        // urlParams[0] == "" !!!
        if(urlParams[1] == "category") //localhost:3000/category
        {
            if(urlParams[2] != undefined) //localhost:3000/category/QUELQUECHOSE
            {
                let categId = parseInt(urlParams[2])
                if(!isNaN(categId)) //est-ce que c'est un number ! oui ? alors on rentre dans le if
                { 
                //localhost:3000/category/42 (un number obligé)

                    if(urlParams[3] == "product")//localhost:3000/category/42/product
                    {

                        if(urlParams[4] != undefined)//on vérifie que on a bien direct le 4èeme params qui est l'id product !!!
                        {
                            //localhost:3000/category/42/product/QUELQUECHOSE

                            let productId = parseInt(urlParams[4])

                            if(!isNaN(productId))//localhost:3000/category/42/product/142 (un number d'office !)
                            {
                                //math total ok ! 
                                res.write(productView())
                                res.end()
                            }
                            else{//localhost:3000/category/42/product/tutuotot (autre chose qu'un number !)
                                res.write(fourOfourView())
                                res.end()
                            }
                        }
                        else{ //localhost:3000/category/42/product/UNDEFINED -> pas normal !! on a pas prévu ce genre d'url !
                            res.write(fourOfourView())
                            res.end()
                        }
                    }
                    else{ 
                        //localhost:3000/category/42 comme ne contient pas le /product, 
                        //c'est que l'on est sur la liste des product de la categ ! donc les detailsCateg
                        res.write(categDetailsView())
                        res.end()
                    }
                        
                }
                else{
                    //localhost:3000/category/tutuotot (autre chose qu'un number !)
                    res.write(fourOfourView())
                    res.end()
                }
            }                        
            else{ //localhost:3000/category on demande donc la liste des categ !
                res.write(categListView())
                res.end()
            }
        
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
    else
        res.writeHead(405, "Method not allowed").end()
}


module.exports = productRouter