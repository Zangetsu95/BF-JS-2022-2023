import React, { useState } from "react"
import axios from "axios"
import { Button, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const SupplierCreateAdmin = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    phone_number: "",
  })

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

      const response = await axios.post(
        "http://127.0.0.1:5000/api/supplier",
        formData,
        config
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Typography variant="h4">Créer un fournisseur</Typography>
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
          label="Adresse"
          name="adress"
          id="adress"
          value={formData.adress}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Numéro de téléphone"
          name="phone_number"
          id="phone_number"
          value={formData.phone_number}
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

export default SupplierCreateAdmin
