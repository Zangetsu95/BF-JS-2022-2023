import * as React from "react"
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

// Initialise pdfmake avec les polices
pdfMake.vfs = pdfFonts.pdfMake.vfs

const TransactionList = () => {
  const [transactionsData, setTransactionsData] = useState([])

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

        setTransactionsData(transactions)
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
          text: `Type: ${transaction.type}`,
          style: "subheader",
        },
        {
          text: `Date: ${transaction.date}`,
          style: "subheader",
        },
        {
          text: `Quantity: ${transaction.quantity}`,
          style: "subheader",
        },
        {
          text: `Price: ${transaction.price} €`,
          style: "subheader",
        },
        {
          text: `Product Name: ${transaction.product_id}`,
          style: "subheader",
        },
        {
          text: `User Email: ${transaction.user_id}`,
          style: "subheader",
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5],
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
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Transactions
      </Typography>
      <Grid container spacing={2}>
        {transactionsData.map((transaction) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={transaction.id}
            sx={{
              backgroundColor:
                transaction.type === "purchase" ? "#e8f5e9" : "#ffebee",
              border: `3px solid ${
                transaction.type === "sale" ? "red" : "transparent"
              }`,
              borderRadius: 2,
              boxShadow: 1,
              p: 2,
              position: "relative",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor:
                  transaction.type === "sale" ? "green" : "transparent",
                borderRadius: 2,
                color: "white",
                left: 0,
                padding: 0.5,
                position: "absolute",
                top: 0,
              }}
            >
              {transaction.type.toUpperCase()}
            </Typography>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Date:</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Quantity:</TableCell>
                      <TableCell>{transaction.quantity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Price:</TableCell>
                      <TableCell>{transaction.price} €</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Product Name:</TableCell>
                      {/* TODO Product NAME */}
                      <TableCell>{transaction.product_id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>User Email:</TableCell>
                      <TableCell>{transaction.user_id}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Button onClick={() => handleGeneratePdf(transaction)}>
              Generate PDF
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default TransactionList
