import { useDispatch } from "react-redux"
import { removeFromCart, updateCartItem } from "../../store/actions/cartActions"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
  Box,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

const CartModal = ({ open, onClose, cartItems }) => {
  const dispatch = useDispatch()

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

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Panier</DialogTitle>
      <DialogContent>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText
                primary={item.name}
                secondary={`Prix: ${item.price} €`}
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "16px",
                }}
              >
                <Typography>Prix: {item.price} €</Typography>
                <Typography>
                  Sous-total: {(item.price * item.quantity).toFixed(2)} €
                </Typography>
              </Box>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CartModal
