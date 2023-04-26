import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material"
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

// Initialise pdfmake avec les polices
pdfMake.vfs = pdfFonts.pdfMake.vfs

const TransactionUserList = ({ userId }) => {
  const [transactions, setTransactions] = useState([])

  const fetchProductName = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/product/${productId}`
      )
      return response.data.name
    } catch (error) {
      console.error("Error fetching product:", error)
      return "Unknown"
    }
  }

  const fetchUserEmail = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/user/${userId}`
      )
      console.log("response :>> ", response)
      return response.data.email
    } catch (error) {
      console.error("Error fetching user:", error)
      return "Unknown"
    }
  }

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/transaction"
        )
        const userTransactions = response.data.filter(
          (transaction) => transaction.user_id === userId
        )

        // Récupérer les noms de produits pour chaque transaction
        const transactionsWithProductNames = await Promise.all(
          userTransactions.map(async (transaction) => {
            const productName = await fetchProductName(transaction.product_id)
            const userEmail = await fetchUserEmail(transaction.user_id)
            return {
              ...transaction,
              product_name: productName,
              user_email: userEmail,
            }
          })
        )

        setTransactions(transactionsWithProductNames)
      } catch (error) {
        console.error("Error fetching transactions:", error)
      }
    }

    fetchTransactions()
  }, [userId])

  //générer le pdf
  const generatePdf = (transaction) => {
    const docDefinition = {
      content: [
        { text: "Transaction Details", style: "header" },
        {
          table: {
            widths: ["auto", "*"],
            body: [
              [
                { text: "Type:", style: "tableHeader" },
                { text: transaction.type },
              ],
              [
                { text: "Date:", style: "tableHeader" },
                {
                  text: new Date(transaction.date).toLocaleDateString("fr-FR"),
                },
              ],
              [
                { text: "Quantity:", style: "tableHeader" },
                { text: transaction.quantity },
              ],
              [
                { text: "Price:", style: "tableHeader" },
                { text: `${transaction.price} €` },
              ],
              [
                { text: "Total:", style: "tableHeader" },
                { text: `${transaction.price * transaction.quantity} €` },
              ],
              [
                { text: "Product Name:", style: "tableHeader" },
                { text: transaction.product_name },
              ],
              [
                { text: "User Email:", style: "tableHeader" },
                { text: transaction.user_email },
              ],
              [
                { text: "Transaction Number:", style: "tableHeader" },
                { text: transaction.transaction_number },
              ],
            ],
          },
          layout: "lightHorizontalLines",
        },
        {
          text: "Merci de nous avoir fait confiance pour vos produits !",
          style: "thanks",
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        tableHeader: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        thanks: {
          fontSize: 14,
          italic: true,
          margin: [0, 20, 0, 0],
          alignment: "center",
        },
      },
    }
    pdfMake
      .createPdf(docDefinition)
      .download(`Transaction_${transaction.id}.pdf`)
  }

  const handleGeneratePdf = (transaction) => {
    generatePdf(transaction)
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "blue", color: "white" }}>
            <TableCell style={{ color: "white" }}>ID de transaction</TableCell>
            <TableCell style={{ color: "white" }}>Date</TableCell>
            <TableCell style={{ color: "white" }}>Produit</TableCell>
            <TableCell style={{ color: "white" }}>Montant</TableCell>
            <TableCell style={{ color: "white" }}>Quantité</TableCell>
            <TableCell style={{ color: "white" }}>Total</TableCell>
            <TableCell style={{ color: "white" }}>Facture</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>
                {new Date(transaction.date).toLocaleDateString("fr-FR")}
              </TableCell>
              <TableCell>{transaction.product_name}</TableCell>

              <TableCell>{transaction.price}€</TableCell>
              <TableCell>{transaction.quantity}</TableCell>
              <TableCell>
                {transaction.quantity * transaction.price} €
              </TableCell>
              <Button onClick={() => handleGeneratePdf(transaction)}>
                Generate PDF
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TransactionUserList
