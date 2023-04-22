import React, { useEffect, useState } from "react"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import axios from "axios"
import jwt_decode from "jwt-decode"

const StockDetailAdmin = () => {
  const location = useLocation()
  const product = location.state.product
  const supplier = location.state.supplier
  const [totalCost, setTotalCost] = useState(0)

  const [quantity, setQuantity] = useState(1)
  const [userID, setUserID] = useState(null)

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10))
    const newValue = parseInt(event.target.value, 10)
    if (newValue >= 1 && newValue <= 250) {
      setQuantity(newValue)
    }
  }

  useEffect(() => {
    const getUserID = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("jwt"))
        const decodedToken = jwt_decode(token)
        const userEmail = decodedToken.email

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

        // Modifier cette URL pour correspondre à l'API de votre serveur
        const response = await axios.get(
          "http://127.0.0.1:5000/api/user",
          config
        )

        const users = response.data
        const user = users.find((user) => user.email === userEmail)

        if (user) {
          setUserID(user.id)
        } else {
          console.error("Utilisateur introuvable")
        }
      } catch (error) {
        console.error(error)
      }
    }

    getUserID()
  }, [])

  useEffect(() => {
    if (product) {
      setTotalCost(product.price * quantity)
    }
  }, [product, quantity])

  const handleSubmit = async () => {
    if (!userID) {
      console.error("L'ID de l'utilisateur n'est pas disponible.")
      return
    }

    if (quantity > product.quantity) {
      alert("La quantité demandée n'est pas disponible en stock.")
      return
    }

    try {
      const token = JSON.parse(localStorage.getItem("jwt"))

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const date = new Date().toISOString() // Obtenir la date actuelle au format ISO
      const price = product.price * quantity // Calculer le prix total
      const transactionData = {
        date,
        type: "sale",
        quantity,
        price,
        product_id: product.id,
        user_id: userID,
      }

      // Envoyer la requête POST à l'API
      const response = await axios.post(
        "http://127.0.0.1:5000/api/transaction",
        transactionData,
        config
      )

      console.log("Transaction créée:", response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Box marginTop={2}>
        <Typography variant="h4" gutterBottom>
          Gérer le stock pour: {product.name}
        </Typography>
        <Typography variant="h6">Fournisseur: {supplier.name}</Typography>
        <Box marginTop={2}>
          <TextField
            label="Quantité à commander"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 1, max: 250 }}
          />
          <Box marginTop={2}>
            <Typography variant="subtitle1">
              Nom du produit: {product.name}
            </Typography>
            <Typography variant="subtitle1">
              Prix à l'unité: {product.price}€
            </Typography>
          </Box>
          <Box marginTop={2}>
            <Typography variant="subtitle1">
              Coût total de la commande : {totalCost}€
            </Typography>
          </Box>
          <Box marginTop={2}>
            <Typography variant="subtitle1">
              Quantité disponible : {product.quantity}
            </Typography>
          </Box>
          <Box marginTop={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Passer la commande
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => window.history.back()}
              sx={{ alignSelf: "center" }}
            >
              Retour
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default StockDetailAdmin
