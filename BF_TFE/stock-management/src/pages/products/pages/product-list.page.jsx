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
import { Link, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// Création du style pour le composant
const ProductPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
})

// Exemple de données pour un produit
const product = {
  id: 1,
  name: "Produit 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: "https://via.placeholder.com/150",
  price: 12.99,
  supplier: "Fournisseur A",
  quantity: 10,
}

// Définition du composant ProductPage
function ProductIndexPage() {
  const products = [product] // Tableau de produits
  const navigate = useNavigate()
  const handleManageStock = (product) => {
    navigate(`/product/${product.id}`, { state: { product } })
  }

  return (
    <ProductPageWrapper>
      <Grid container spacing={2}>
        {products.map((product) => (
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
                          Gérer le stock
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
    </ProductPageWrapper>
  )
}

export default ProductIndexPage
