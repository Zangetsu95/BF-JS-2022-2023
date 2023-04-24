import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material"

const CategoryCreateAdmin = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
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

      const categoryData = {
        name: formData.name,
      }

      const categoryResponse = await axios.post(
        "http://127.0.0.1:5000/api/category",
        categoryData,
        config
      )
    } catch (error) {
      console.log(error)
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
        <Button type="submit" variant="contained" color="primary">
          Créer
        </Button>
        <Button onClick={() => navigate(-1)}>Retour</Button>
      </form>
    </div>
  )
}

export default CategoryCreateAdmin
