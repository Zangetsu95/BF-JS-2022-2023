import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Button,
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

  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category_id: "",
  })

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const token = JSON.parse(localStorage.getItem("jwt"))
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const price = parseFloat(formData.price)
      const quantity = parseFloat(formData.quantity)

      const response = await axios.post(
        "http://127.0.0.1:5000/api/product",
        { ...formData, price, quantity },
        config
      )
      console.log(response)
    } catch (error) {
      console.error(error)
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
        <Button type="submit" variant="contained" color="primary">
          Créer
        </Button>
        <Button onClick={() => navigate(-1)}>Retour</Button>
      </form>
    </div>
  )
}

export default ProductCreateAdmin
