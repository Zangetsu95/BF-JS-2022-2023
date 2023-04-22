import { useState, useEffect } from "react"
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
} from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const SupplierDetailAdmin = () => {
  const API_BASE_URL = "http://localhost:5000/api/supplier"
  const token = JSON.parse(localStorage.getItem("jwt"))
  const location = useLocation() || {}
  const [supplier, setSupplier] = useState(null)
  const navigate = useNavigate()
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const [supplierId, setSupplierId] = useState(
    location.state?.supplier?.id || ""
  )
  const [name, setName] = useState(location.state?.supplier?.name || "")
  const [address, setAddress] = useState(location.state?.supplier?.adress || "")
  const [phoneNumber, setPhoneNumber] = useState(
    location.state?.supplier?.phone_number || ""
  )

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${supplierId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setSupplier(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSupplier()
  }, [])

  const handleAlertClose = () => {
    setIsAlertOpen(false)
    navigate("/admin")
  }

  const handleUpdate = async (event) => {
    event.preventDefault()

    const supplierData = {
      name: name,
      adress: address,
      phone_number: phoneNumber,
    }

    try {
      const response = await axios.put(
        `${API_BASE_URL}/${supplierId}`,
        supplierData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      if (response) {
        setIsAlertOpen(true)
      }
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteSupplier = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(response)
      navigate("/admin/supplier")
    } catch (error) {
      console.error(error)
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDeleteConfirmation = async () => {
    await deleteSupplier(supplierId)
    setOpen(false)
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      {supplier && (
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
                  label="Nom du fournisseur"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <TextField
                  id="adress"
                  name="adress"
                  label="Adresse"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
                <TextField
                  id="phone_number"
                  name="phone_number"
                  label="Numéro de téléphone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginTop: "1rem", alignSelf: "center" }}
                >
                  Modifier le fournisseur
                </Button>
              </form>
              <Dialog
                open={isAlertOpen}
                onClose={handleAlertClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  Produit modifié
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Le fournisseur a été modifié avec succès.
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
                Supprimer le fournisseur
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Êtes-vous sûr de vouloir supprimer ce fournisseur ?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Cette action est irréversible et supprimera définitivement
                    le fournisseur.
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
      )}
    </>
  )
}

export default SupplierDetailAdmin
