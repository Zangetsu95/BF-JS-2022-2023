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
import { useTheme } from "@emotion/react"

const CategoryList = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const [currentPage, setCurrentPage] = useState()
  const [totalPages, setTotalPages] = useState(1)
  const [category, setCategory] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/category`)
        setCategory(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
  }, [])

  const handleManageCategories = (category) => {
    navigate(`/admin/category/${category.id}`, {
      state: { category: category },
    })
  }

  const handleCreateCategory = () => {
    navigate("/admin/create-category")
  }
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateCategory}
        style={{ marginBottom: "20px" }}
      >
        Ajouter une Category
      </Button>
      <Grid container spacing={2}>
        {category.map((data) => (
          <Grid item xs={12} sm={6} md={4} key={data.id}>
            <Paper>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ color: theme.palette.text.secondary }}
                      >
                        Nom:
                      </TableCell>
                      <TableCell
                        style={{ color: theme.palette.text.secondary }}
                      >
                        {data.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleManageCategories(data)}
                        >
                          Modifier la category
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

export default CategoryList
