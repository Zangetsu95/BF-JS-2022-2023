import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { clearCart } from "../../store/actions/cartActions"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

const PaymentForm = ({ onSuccess, cartItems, userId }) => {
  const [error, setError] = useState(null)
  const stripe = useStripe()
  const elements = useElements()
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    if (error) {
      setError(error.message)
      return
    }

    try {
      // Create a transaction for each item in the cart
      for (let item of cartItems) {
        const transactionData = {
          type: "sale",
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
          user_id: userId,
          date: new Date().toISOString(),
        }
        const transactionResponse = await axios.post(
          "http://127.0.0.1:5000/api/transaction",
          transactionData
        )
        if (transactionResponse.status !== 201) {
          setError("Erreur lors de l'enregistrement de la transaction.")
          return
        }
      }
      dispatch(clearCart())
      setIsAlertOpen(true)
      onSuccess()
    } catch (error) {
      console.log(error)
      setError("Erreur lors de l'enregistrement des transactions.")
    }
  }

  const handleAlertClose = () => {
    setIsAlertOpen(false)
    navigate("/")
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        fontFamily: "Arial, sans-serif",
        "::placeholder": {
          color: "#aab7c4",
        },
        border: "1px solid #ced4da",
        borderRadius: "4px",
        padding: "12px",
        boxShadow: "0 1px 3px 0 #e6ebf1",
        backgroundColor: "white",
        lineHeight: "1.5",
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement options={cardElementOptions} />
        <button type="submit" disabled={!stripe}>
          Procéder au paiement
        </button>
        {error && <div>{error}</div>}
        <Dialog
          open={isAlertOpen}
          onClose={handleAlertClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Paiement effectué !</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Le paiement s'est bien effectué !.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAlertClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  )
}

export default PaymentForm
