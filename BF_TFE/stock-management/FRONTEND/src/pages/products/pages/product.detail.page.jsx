import {
  Typography,
  Button,
  Grid,
  Box,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../store/actions/cartActions"

function ProductDetailsPage(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const { id, name, description, imageUrl, price, supplier, quantity } =
    location.state.product

  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const dispatch = useDispatch()
  const handleAlertClose = () => {
    setTimeout(() => {
      setIsAlertOpen(false)
    }, 2000)
  }

  const handleAddToCart = () => {
    dispatch(addToCart(id, name, price, parseInt(selectedQuantity)))
    setIsAlertOpen(true)
    setTimeout(() => {
      setIsAlertOpen(false)
    }, 2000)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        gap: "2rem",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* <Grid item xs={12} md={6}>
          <img src={imageUrl} alt={name} style={{ maxWidth: "100%" }} />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Prix : {price} €
          </Typography>
          {/* <Typography variant="h6" gutterBottom>
            Fournisseur : {supplier}
          </Typography> */}
          <Typography variant="h6" gutterBottom>
            Quantité en stock : {quantity}
          </Typography>
          <TextField
            id="selected-quantity"
            name="selected-quantity"
            label="Quantité"
            variant="outlined"
            margin="normal"
            type="number"
            InputProps={{ inputProps: { min: 1, max: quantity } }}
            value={selectedQuantity}
            onChange={(event) => setSelectedQuantity(event.target.value)}
          />
          <Box sx={{ marginTop: "1rem" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Ajouter {selectedQuantity} au panier
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => window.history.back()}
              sx={{ alignSelf: "center" }}
            >
              Retour
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductDetailsPage
