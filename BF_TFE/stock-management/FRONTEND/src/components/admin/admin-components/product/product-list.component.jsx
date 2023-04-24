import * as React from "react"
import { styled } from "@mui/material/styles"
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const ProductList = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [products, setProducts] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/product?offset=${
            (currentPage - 1) * 10
          }&limit=10${
            selectedCategory ? `&category_id=${selectedCategory}` : ""
          }${searchProduct ? `&search=${searchProduct}` : ""}`
        )
        setProducts(response.data.items)
        console.log("response.data :>> ", response.data)
        console.log("response.data.items :>> ", response.data.items.cate)
        setTotalPages(Math.ceil(response.data.totalItems / 10))
      } catch (error) {
        console.error(error)
      }
    }

    fetchProducts()
  }, [currentPage])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/category")
        setCategories(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCategories()
  }, [currentPage, searchProduct, selectedCategory])

  const handleManageStock = (product) => {
    navigate(`/admin/product/${product.id}`, {
      state: { product: product, category_id: product.category_id },
    })
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleCreateProduct = () => {
    navigate("/admin/create-product")
  }

  return (
    <>
      {/* <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            label="Rechercher un produit"
            variant="outlined"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Filtrer par catégorie</InputLabel>
            <Select
              label="Filtrer par catégorie"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <MenuItem value="">Toutes les catégories</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid> */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateProduct}
        style={{ marginBottom: "20px" }}
      >
        Créer un produit
      </Button>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell colSpan={2}>
                        <img src={product.imageUrl} alt={product.name} />
                      </TableCell> */}
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
                    {/* <TableRow>
                      <TableCell>Fournisseur:</TableCell>
                      <TableCell>{product.supplier}</TableCell>
                    </TableRow> */}
                    <TableRow>
                      <TableCell>Quantité disponible:</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Catégorie:</TableCell>
                      <TableCell>{product.category.name}</TableCell>
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

      {totalPages > 1 && (
        <div>
          <Button disabled={currentPage === 1} onClick={handlePrevPage}>
            Précédent
          </Button>
          <Button disabled={currentPage === 1} onClick={handlePrevPage}>
            Précédent
          </Button>
          <Button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Suivant
          </Button>
        </div>
      )}
    </>
  )
}

export default ProductList
