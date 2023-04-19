import * as React from "react"
import { styled } from "@mui/material/styles"
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

// Création du style pour le composant
const ProductPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
})

// Définition du composant ProductPage
function ProductIndexPage() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [data, setData] = useState(null)
  // const getNumPages = (numItems) => {
  //   return Math.ceil(numItems / 12)
  // }
  const handleManageStock = (product) => {
    navigate(`/product/${product.id}`, { state: { product } })
  }
  console.log("hello")
  useEffect(() => {
    const options = {
      method: "GET",
      url: `http://127.0.0.1:5000/api/product?offset=${
        (currentPage - 1) * 12
      }&limit=12`,
    }
    fetch(options.url).then((res) => {
      res.json().then((data) => {
        console.log(data)
      })
    })
    console.log("hello")
    axios
      .request(options)
      .then(function (response) {
        const res = response.data
        console.log(response.data)
        console.log("res.items :>> ", res.items)
        setData(res.items)
        if (res) {
          const numPages = Math.ceil(res.totalItems / 12)
          setTotalPage(numPages)
        }
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [currentPage])

  return (
    <ProductPageWrapper>
      <Grid container spacing={2}>
        {data &&
          data.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Paper>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2}>
                          <img src={product.imageUrl} alt={product.name} />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Nom:</TableCell>
                        <TableCell>{product.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Description:</TableCell>
                        <TableCell>{product.description}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Prix:</TableCell>
                        <TableCell>{product.price} €</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fournisseur:</TableCell>
                        <TableCell>{product.supplier}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Quantité disponible:</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleManageStock(product)}
                          >
                            Voir le produit
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          ))}
      </Grid>
      {totalPage > 1 && (
        <div>
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Précédent
          </Button>
          <Button
            disabled={currentPage === totalPage}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Suivant
          </Button>
        </div>
      )}
    </ProductPageWrapper>
  )
}

export default ProductIndexPage
