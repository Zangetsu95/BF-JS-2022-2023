import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

const ProductCreateAdmin = () => {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category_id: "",
    supplier_id: "",
  })
  const [suppliers, setSuppliers] = useState([])

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/supplier")
      setSuppliers(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSuppliers()
  }, [])

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
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleAlertClose = () => {
    setIsAlertOpen(false)
    navigate("/admin")
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      const token = JSON.parse(localStorage.getItem("jwt"))
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const price = parseFloat(formData.price)
      const quantity = parseFloat(formData.quantity)
      const category_id = parseInt(formData.category_id, 10)
      const supplier_id = parseInt(formData.supplier_id, 10)

      const productData = {
        name: formData.name,
        description: formData.description,
        price,
        quantity,
        category_id,
      }

      // Créer le produit
      const productResponse = await axios.post(
        "http://127.0.0.1:5000/api/product",
        productData,
        config
      )

      console.log("Product Response:", productResponse.data)

      // Récupérer l'ID du produit créé
      const createdProductId = productResponse.data.data.id

      // Créer l'association entre le produit et le fournisseur
      const productSupplierData = {
        productId: parseInt(createdProductId, 10),
        supplierId: supplier_id,
      }

      console.log("Création de l'association produit-fournisseur...")
      await axios.post(
        "http://127.0.0.1:5000/api/product-supplier",
        productSupplierData,
        config
      )
      console.log("Association produit-fournisseur créée.")
      // Rediriger vers la page d'accueil des produits

      setIsAlertOpen(true)
      setSubmitting(false)
    } catch (error) {
      console.error(error)
      setSubmitting(false)
    }
  }

  return (
    <div>
      <Typography variant="h4">Créer un produit</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Prix"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          type="number"
          fullWidth
          margin="normal"
          InputProps={{
            inputProps: { min: 0, step: "0.01" },
          }}
        />

        <TextField
          label="Quantité"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
          type="number"
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Catégorie</InputLabel>
          <Select
            labelId="category-label"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="supplier-label">Fournisseur</InputLabel>
          <Select
            labelId="supplier-label"
            name="supplier_id"
            value={formData.supplier_id}
            onChange={handleChange}
          >
            {suppliers.map((supplier) => (
              <MenuItem key={supplier.id} value={supplier.id}>
                {supplier.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={submitting}
        >
          Créer
        </Button>
        <Dialog
          open={isAlertOpen}
          onClose={handleAlertClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Produit modifié</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Le produit a été crée !.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAlertClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>

        <Button onClick={() => navigate(-1)}>Retour</Button>
      </form>
    </div>
  )
}

export default ProductCreateAdmin
