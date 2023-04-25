import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import Paper from "@mui/material/Paper"
import TransactionUserList from "./pages/transactionUser.page"
import axios from "axios"
import jwt_decode from "jwt-decode"

export default function UserDashboard() {
  const [value, setValue] = React.useState(0)
  const [userID, setUserID] = React.useState(null)

  React.useEffect(() => {
    const getUserID = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("jwt"))
        const decodedToken = jwt_decode(token)
        const userEmail = decodedToken.email

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

        // Modifier cette URL pour correspondre à l'API de votre serveur
        const response = await axios.get(
          "http://127.0.0.1:5000/api/user",
          config
        )

        const users = response.data
        const user = users.find((user) => user.email === userEmail)

        if (user) {
          setUserID(user.id)
        } else {
          console.error("Utilisateur introuvable")
        }
      } catch (error) {
        console.error(error)
      }
    }

    getUserID()
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2 }}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            centered
          >
            <Tab label="Transactions" />
          </Tabs>
          {value === 0 && <TransactionUserList userId={userID} />}
        </Paper>
      </Container>
    </Box>
  )
}
