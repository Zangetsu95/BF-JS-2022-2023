import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { useState } from "react"

const PaymentForm = ({ onSuccess, cartItems, userId }) => {
  const [error, setError] = useState(null)
  const stripe = useStripe()
  const elements = useElements()

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
      const response = await axios.post("http://127.0.0.1:5000/api/stripe", {
        paymentMethodId: paymentMethod.id,
      })
      console.log(response)
      if (response.data.success) {
        try {
          const transactionResponse = await axios.post(
            "http://127.0.0.1:5000/api/transaction",
            {
              type: "sale",
              product_id: cartItems.id,
              quantity: cartItems.quantity,
              price: cartItems.price,
              user_id: userId,
              date: new Date().toISOString(),
            }
          )
          console.log("transactionResponse :>> ", transactionResponse)

          if (transactionResponse.status === 200) {
            onSuccess()
          } else {
            setError("Erreur lors de l'enregistrement de la transaction.")
          }
          console.log("transactionResponse :>> ", transactionResponse)
        } catch (error) {
          console.log(error)
          setError("Erreur lors de l'enregistrement de la transaction.")
        }
      } else {
        setError("Erreur lors du paiement avant le catch.")
      }
    } catch (error) {
      console.log(error)
      setError("Erreur lors du paiement.")
    }
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
    <form onSubmit={handleSubmit}>
      <CardElement options={cardElementOptions} />
      <button type="submit" disabled={!stripe}>
        Procéder au paiement
      </button>
      {error && <div>{error}</div>}
    </form>
  )
}

export default PaymentForm
