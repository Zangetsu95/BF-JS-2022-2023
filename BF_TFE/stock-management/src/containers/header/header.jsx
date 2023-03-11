import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import {
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material"
import InventoryIcon from "@mui/icons-material/Inventory"
import DrawerComponent from "../../components/Drawer/drawer.component"
import { useTheme } from "@mui/material/styles"

const PAGES = ["Home", "Products", "Stocks", "About"]

const Header = () => {
  const [value, setValue] = useState()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <InventoryIcon />
          {isMatch ? (
            <>
              <Typography>Sotck</Typography>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
