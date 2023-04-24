import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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

const CategoryCreateAdmin = () => {
  const navigate = useNavigate()
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleAlertClose = () => {
    setIsAlertOpen(false)
    navigate("/admin")
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
      setIsAlertOpen(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Typography variant="h4">Créer une Category</Typography>
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
        <Dialog
          open={isAlertOpen}
          onClose={handleAlertClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Category crée</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              La catégory a été crée !.
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

export default CategoryCreateAdmin
