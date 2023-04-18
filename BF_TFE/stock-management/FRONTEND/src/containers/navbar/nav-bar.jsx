import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { checkAuth, logout } from "../../store/actions/authActions.js"
import { useEffect } from "react"

const CustomLink = ({ to, name }) => (
  <Button
    component={NavLink}
    to={to}
    sx={{
      color: "white",
      "&.active": {
        color: "white",
        borderBottom: "2px solid white",
      },
    }}
  >
    {name}
  </Button>
)

function ResponsiveAppBar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const pagesConnected = ["Product", "Logout", "Home"]
  const settingsNotConnected = ["Login", "Home"]
  const settingsConnected = ["Profile", "Logout", "Home"]
  const pagesToDisplay = isAuthenticated ? pagesConnected : settingsNotConnected

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    await dispatch(logout())
    dispatch({ type: "SET_UNAUTHENTICATED" })
    return navigate("/")
  }

  // Mettre à jour la navbar après une action de logout
  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch, isAuthenticated])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pagesToDisplay.map((page) => (
                <MenuItem
                  key={page}
                  component={NavLink}
                  to={page !== "Home" ? `/${page.toLowerCase()}` : ""}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pagesToDisplay.map((page) => (
              <CustomLink
                key={page}
                to={page !== "Home" ? `/${page.toLowerCase()}` : ""}
                name={page || "Home"}
              />
            ))}
          </Box>

          <Tooltip title="Account settings">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <Avatar alt="user profile" src="https://picsum.photos/200" />
            </IconButton>
          </Tooltip>
          {isAuthenticated && (
            <MenuItem
              key="Logout"
              onClick={handleLogout}
              sx={{
                color: "white",
                backgroundColor: "red",
                "&:hover": {
                  backgroundColor: "red",
                },
                "&:hover .MuiTypography-root": {
                  color: "white",
                },
              }}
            >
              <Typography>Logout</Typography>
            </MenuItem>
          )}

          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settingsConnected.map((setting) => (
              <MenuItem key={setting}>
                <Typography>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
