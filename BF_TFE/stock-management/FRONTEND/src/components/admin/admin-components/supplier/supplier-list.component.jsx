import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
} from "@mui/material"

const SupplierList = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState()
  const [totalPages, setTotalPages] = useState(1)
  const [supplier, setSupplier] = useState([])

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/supplier`)
        setSupplier(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSupplier()
  }, [])

  const handleManageSupplier = (supplier) => {
    navigate(`/admin/supplier/${supplier.id}`, {
      state: { supplier: supplier },
    })
  }

  const handleCreateSupplier = () => {
    navigate("/admin/create-supplier")
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateSupplier}
        style={{ marginBottom: "20px" }}
      >
        Ajouter un fournisseur
      </Button>
      <Grid container spacing={2}>
        {supplier.map((data) => (
          <Grid item xs={12} sm={6} md={4} key={data.id}>
            <Paper>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Nom:</TableCell>
                      <TableCell>{data.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Adress:</TableCell>
                      <TableCell>{data.adress}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Téléphone:</TableCell>
                      <TableCell>{data.phone_number} </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleManageSupplier(data)}
                        >
                          Voir le fournisseur
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default SupplierList