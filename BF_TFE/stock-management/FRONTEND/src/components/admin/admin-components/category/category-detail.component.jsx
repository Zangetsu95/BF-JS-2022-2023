import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"

const CategoryDetailAdmin = () => {
  const location = useLocation() || {}
  const [category, setCategory] = useState(null)
  const navigate = useNavigate()
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [isDeleteSuccessDialogOpen, setIsDeleteSuccessDialogOpen] =
    useState(false)

  const API_BASE_URL = "http://localhost:5000/api/category"
  const token = JSON.parse(localStorage.getItem("jwt"))

  const [categoryId, setCategoryId] = useState(
    location.state?.category?.id || ""
  )
  const [name, setName] = useState(location.state?.category?.name || "")

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const updatedCategory = async (categoryId, categoryData) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/${categoryId}`,
        categoryData,
        config
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleAlertClose = () => {
    setIsAlertOpen(false)
    navigate("/admin")
  }

  const handleUpdate = async (event) => {
    event.preventDefault()

    const categoryData = {
      name: name,
    }

    const putCategory = await updatedCategory(categoryId, categoryData)

    if (putCategory) {
      setIsAlertOpen(true)
    }
  }
  const deletedCategory = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`, config)

      if (response) {
        return response.data
      } else {
        console.log("Aucune donnée renvoyée après la suppression du produit")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteConfirmation = async () => {
    await deletedCategory(categoryId)
    setOpen(false)
    setIsDeleteSuccessDialogOpen(true)
  }

  const handleDeleteSuccessDialogClose = () => {
    setIsDeleteSuccessDialogOpen(false)
    navigate("/admin")
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        gap: "2rem",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <form onSubmit={handleUpdate}>
            <TextField
              id="name"
              name="name"
              label="Nom du produit"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginTop: "1rem", alignSelf: "center" }}
            >
              Modifier la category
            </Button>
          </form>

          <Dialog
            open={isAlertOpen}
            onClose={handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Produit modifié</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Le produit a été modifié avec succès.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAlertClose} color="primary" autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            variant="contained"
            color="error"
            onClick={handleClickOpen}
            sx={{ marginTop: "1rem", alignSelf: "center" }}
          >
            Supprimer le produit
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Êtes-vous sûr de vouloir supprimer ce produit ?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Cette action est irréversible et supprimera définitivement le
                produit.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Annuler
              </Button>
              <Button
                onClick={handleDeleteConfirmation}
                color="error"
                autoFocus
              >
                Supprimer
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={isDeleteSuccessDialogOpen}
            onClose={handleDeleteSuccessDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Category supprimé</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                La category a bien été supprimé!.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleDeleteSuccessDialogClose}
                color="primary"
                autoFocus
              >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => window.history.back()}
        sx={{ alignSelf: "center" }}
      >
        Retour
      </Button>
    </Box>
  )
}

export default CategoryDetailAdmin
