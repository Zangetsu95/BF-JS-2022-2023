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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import { useTheme } from "@emotion/react"

const ProductDetailAdmin = () => {
  const location = useLocation() || {}
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [isDeleteSuccessDialogOpen, setIsDeleteSuccessDialogOpen] =
    useState(false)

  const API_BASE_URL = "http://localhost:5000/api/product"
  const token = JSON.parse(localStorage.getItem("jwt"))
  console.log(token)

  const [productId, setProductId] = useState(location.state?.product?.id || "")

  const [name, setName] = useState(location.state?.product?.name || "")
  const [description, setDescription] = useState(
    location.state?.product?.description || ""
  )
  const [price, setPrice] = useState(location.state?.product?.price || 0)
  const [category, setCategory] = useState(
    location.state?.product?.category_id || ""
  )
  const [quantity, setQuantity] = useState(
    location.state?.product?.quantity || 0
  )

  useEffect(() => {
    if (location.state && location.state.product) {
      setName(location.state.product.name)
      setDescription(location.state.product.description)
      setPrice(location.state.product.price)
      setCategory(location.state.product.category_id)
      setQuantity(location.state.product.quantity)
    }
  }, [location.state])

  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (location.state?.product?.category_id && categories.length > 0) {
      setCategory(location.state.product.category_id)
    }
  }, [location.state, categories])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/category")
        setCategories(response.data)
      } catch (error) {
        console.error(error)
        // Gérer les erreurs d'API ici si nécessaire
      }
    }

    fetchCategories()
  }, [])

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const updateProduct = async (productId, productData) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/${productId}`,
        productData,
        config
      )
      return response.data
    } catch (error) {
      console.error(error)
      // Gérer les erreurs d'API ici si nécessaire
    }
  }

  const handleAlertClose = () => {
    setIsAlertOpen(false)
    navigate("/admin")
  }

  const handleUpdate = async (event) => {
    event.preventDefault()

    const productData = {
      name: name,
      description: description,
      price: parseFloat(price),
      category_id: parseInt(category),
    }
    console.log("Produit avant mise à jour:")
    console.log("name:", name)
    console.log("description:", description)
    console.log("price:", parseFloat(price))
    console.log("category_id:", parseInt(category))

    const updatedProduct = await updateProduct(productId, productData)

    if (updatedProduct) {
      setIsAlertOpen(true)
    }

    console.log("Produit mis à jour:", updatedProduct)
  }

  const handleUpdateQuantityRequest = async (id, newQuantity) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/${id}/quantity`,
        {
          quantity: newQuantity,
        },
        config
      )
      console.log("API response:", response) // Ajoutez ceci
      return response.data
    } catch (error) {
      console.error(error)
      // Gérer les erreurs d'API ici si nécessaire
    }
  }

  const handleUpdateQuantity = async (event) => {
    event.preventDefault()
    const newQuantity = parseFloat(quantity)
    console.log("productId:", productId) // Ajoutez ceci
    console.log("newQuantity:", newQuantity) // Ajoutez ceci
    const updatedProduct = await handleUpdateQuantityRequest(
      productId,
      newQuantity
    )
    setProduct(updatedProduct)
    if (updatedProduct) {
      setIsAlertOpen(true)
    }
  }

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`, config)
      if (response) {
        return response.data
      } else {
        console.log("Aucune donnée renvoyée après la suppression du produit")
        // Vous pouvez gérer cette situation ici, par exemple, en renvoyant un objet vide
        return {}
      }
    } catch (error) {
      console.error(error)
      // Gérer les erreurs d'API ici si nécessaire
    }
  }

  const getCategoryNameById = (id) => {
    const categoryObject = categories.find((category) => category.id === id)
    return categoryObject ? categoryObject.name : ""
  }

  const handleDeleteConfirmation = async () => {
    // Faites l'appel API pour supprimer le produit ici
    await deleteProduct(productId)
    setOpen(false) // Fermer la boîte de dialogue
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
            <TextField
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <TextField
              id="price"
              name="price"
              label="Prix"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              InputProps={{
                inputProps: { min: 0, step: "0.01" },
              }}
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />

            <TextField
              id="category"
              name="category"
              label="Nom de la catégorie"
              variant="outlined"
              fullWidth
              margin="normal"
              value={category} // Récupération du nom de la catégorie à partir de son ID
              onChange={(event) => setCategory(event.target.value)} // Mise à jour de l'ID de la catégorie dans le state
              select
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
            {/* <TextField
              id="quantity"
              name="quantity"
              label="Quantité en stock"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            /> */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginTop: "1rem", alignSelf: "center" }}
            >
              Modifier le produit
            </Button>
          </form>
          <Box sx={{ marginTop: "1rem" }}>
            <TextField
              id="quantity"
              name="quantity"
              label="Nouvelle quantité en stock"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              defaultValue={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "1rem", alignSelf: "center" }}
              onClick={handleUpdateQuantity}
            >
              Modifier la quantité
            </Button>
          </Box>
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
            <DialogTitle id="alert-dialog-title">Produit supprimé</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Le produit a bien été supprimé!.
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

export default ProductDetailAdmin
