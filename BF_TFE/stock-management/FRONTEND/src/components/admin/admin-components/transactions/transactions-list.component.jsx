import React, { useState, useEffect } from "react"
import {
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material"
import axios from "axios"
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { useTheme } from "@emotion/react"
import jwt_decode from "jwt-decode"

// Initialise pdfmake avec les polices
pdfMake.vfs = pdfFonts.pdfMake.vfs

const TransactionList = () => {
  const theme = useTheme()
  const [transactionsData, setTransactionsData] = useState([])

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
    const fetchTransactionsData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("jwt"))
        const decodedToken = jwt_decode(token)
        const userEmail = decodedToken.email

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

        const response = await axios.get(
          "http://127.0.0.1:5000/api/transaction?_expand=product",
          config
        )

        const transactions = response.data

        const transactionsWithProductNames = await Promise.all(
          transactions.map(async (transaction) => {
            const productName = await fetchProductName(transaction.product_id)
            const userEmail = await fetchUserEmail(transaction.user_id)
            return {
              ...transaction,
              product_name: productName,
              user_email: userEmail,
            }
          })
        )

        setTransactionsData(transactionsWithProductNames)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTransactionsData()
  }, [])

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
                { text: "Product:", style: "tableHeader" },
                { text: transaction.product_name },
              ],
              [
                { text: "User Email:", style: "tableHeader" },
                { text: transaction.user_email },
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          fillColor: theme.palette.primary.main,
          color: "white",
        },
      },
    }
    pdfMake.createPdf(docDefinition).open()
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10}>
        <Typography variant="h4" gutterBottom>
          Transactions List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    color: theme.palette.text.primary,
                    backgroundColor: "blue",
                  }}
                >
                  Type
                </TableCell>
                <TableCell
                  style={{
                    color: theme.palette.text.primary,
                    backgroundColor: "blue",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  style={{
                    color: theme.palette.text.primary,
                    backgroundColor: "blue",
                  }}
                >
                  Quantité
                </TableCell>
                <TableCell
                  style={{
                    color: theme.palette.text.primary,
                    backgroundColor: "blue",
                  }}
                >
                  Prix
                </TableCell>
                <TableCell
                  style={{
                    color: theme.palette.text.primary,
                    backgroundColor: "blue",
                  }}
                >
                  Prix total
                </TableCell>
                <TableCell
                  style={{
                    color: theme.palette.text.primary,
                    backgroundColor: "blue",
                  }}
                >
                  Produit
                </TableCell>
                <TableCell
                  style={{
                    color: theme.palette.text.primary,
                    backgroundColor: "blue",
                  }}
                >
                  User Email
                </TableCell>
                <TableCell
                  style={{
                    color: theme.palette.text.primary,
                    backgroundColor: "blue",
                  }}
                >
                  Facture
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionsData.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell
                    style={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {transaction.type}
                  </TableCell>
                  <TableCell
                    style={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {new Date(transaction.date).toLocaleDateString("fr-FR")}
                  </TableCell>
                  <TableCell
                    style={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {transaction.quantity}
                  </TableCell>
                  <TableCell
                    style={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {transaction.price} €
                  </TableCell>
                  <TableCell
                    style={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {transaction.price * transaction.quantity} €
                  </TableCell>
                  <TableCell
                    style={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {transaction.product_name}
                  </TableCell>
                  <TableCell
                    style={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {transaction.user_email}
                  </TableCell>
                  <TableCell
                    style={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => generatePdf(transaction)}
                    >
                      PDF
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default TransactionList
