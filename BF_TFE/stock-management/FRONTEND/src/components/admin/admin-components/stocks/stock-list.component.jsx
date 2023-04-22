import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const StocksList = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(15)
  const navigate = useNavigate()

  const handleManageStock = (product, supplier) => {
    navigate(`/admin/stocks/${product.id}`, {
      state: { product: product, supplier: supplier },
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/product-supplier"
        )
        setData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const searchResults = data.filter(
      (item) =>
        item.product.name.toLowerCase().includes(search.toLowerCase()) ||
        item.supplier.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredData(searchResults)
  }, [search, data])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      <Box marginBottom={2}>
        <Typography variant="h4" gutterBottom>
          Stocks
        </Typography>
        <TextField
          label="Rechercher"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                backgroundColor: "blue",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Produit
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "blue",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Fournisseur
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "blue",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Quantité
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "blue",
                color: "white",
                fontWeight: "bold",
              }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(({ product, supplier }) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{supplier.name}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "orange", color: "white" }}
                    onClick={() => handleManageStock(product, supplier)}
                  >
                    Gérer le stock
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 15, 25, 50, 100]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default StocksList
