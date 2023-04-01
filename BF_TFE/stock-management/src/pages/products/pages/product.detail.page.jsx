import { Typography, Button, Grid } from "@mui/material"

function ProductDetailsPage(props) {
  const { name, description, imageUrl, price, supplier, stockQuantity } = props
  // const location = useLocation()
  // const product = location.state.product

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
          Quantité en stock : {stockQuantity}
        </Typography>
        <Button variant="contained" color="primary">
          Ajouter au panier
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProductDetailsPage
