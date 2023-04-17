import { Typography, Button, Grid } from "@mui/material"
import { useLocation } from "react-router-dom"

function ProductDetailsPage(props) {
  const location = useLocation()
  const { name, description, imageUrl, price, supplier, quantity } =
    location.state.product
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <img src={imageUrl} alt={name} style={{ maxWidth: "100%" }} />
      </Grid>
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
        <Typography variant="h6" gutterBottom>
          Fournisseur : {supplier}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Quantité en stock : {quantity}
        </Typography>
        <Button variant="contained" color="primary">
          Ajouter au panier
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProductDetailsPage
