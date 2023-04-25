import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, updateCartItem } from "../../store/actions/cartActions"
import {
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useNavigate } from "react-router-dom"

const CartConfirmation = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const navigate = useNavigate()

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const handleUpdateCartItemQuantity = (itemId, quantity) => {
    dispatch(updateCartItem(itemId, quantity))
  }

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  const handleNavigateCart = () => {
    navigate("/cart/paying")
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Confirmation du panier
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id} divider>
                <ListItemText
                  primary={item.name}
                  secondary={`Prix: ${item.price} €`}
                />
                <ListItemText
                  primary={`Sous-toal`}
                  secondary={`${(item.price * item.quantity).toFixed(2)}€`}
                />
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateCartItemQuantity(
                      item.id,
                      parseInt(e.target.value)
                    )
                  }
                  inputProps={{ min: 1 }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    color="error"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
            <ListItem>
              <Typography variant="h6">
                Total: {calculateTotal().toFixed(2)} €
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleNavigateCart()
            }}
          >
            Procéder au paiement
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => window.history.back()}
            sx={{ alignSelf: "center" }}
          >
            Retour
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CartConfirmation
