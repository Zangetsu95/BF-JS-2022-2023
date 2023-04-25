import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"
import { loadStripe } from "@stripe/stripe-js"
import { useDispatch, useSelector } from "react-redux"
import PaymentForm from "../../components/cart/payment.component"
import { Elements } from "@stripe/react-stripe-js"
import axios from "axios"
import { useEffect, useState } from "react"
import { clearCart } from "../../store/actions/cartActions"
import jwt_decode from "jwt-decode"

const CartPaying = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  const userId = useSelector((state) => state.auth.userId)
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const [userID, setUserID] = useState(null)

  const calculateTotal = () => {
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    )

    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )

    return { totalQuantity, totalPrice }
  }

  const { totalQuantity, totalPrice } = calculateTotal()

  const handlePaymentSuccess = () => {
    dispatch(clearCart())
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

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Liste des produits confirmés
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Prix: ${item.price} € x ${item.quantity}`}
            />
            <ListItemText
              primary={`Sous-toal`}
              secondary={`${(item.price * item.quantity).toFixed(2)}€`}
            />
          </ListItem>
        ))}
        <ListItem>
          <Typography variant="h6">Total: {totalPrice.toFixed(2)} €</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">Quantité totale: {totalQuantity}</Typography>
        </ListItem>
      </List>
      <Elements stripe={stripePromise}>
        <PaymentForm
          onSuccess={handlePaymentSuccess}
          cartItems={cartItems}
          userId={userID}
        />
      </Elements>
    </Container>
  )
}

export default CartPaying
