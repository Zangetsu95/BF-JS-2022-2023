import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"

const PAGES = ["Home", "Products", "Stocks", "About", "Login", "SignUp"]

const DrawerComponent = () => {
  const [openDrawer, setopenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setopenDrawer(false)}>
              <ListItemIcon>
                <ListItemText key={index}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComponent
