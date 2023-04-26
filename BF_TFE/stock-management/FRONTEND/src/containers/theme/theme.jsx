import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#001220", // Bleu
    },
    secondary: {
      main: "#FA7268", // Orange-rose
    },
    text: {
      primary: "#FFFFFF", // Blanc
      secondary: "#000000", // Noir
    },
    background: {
      default: "#F5F5F5", // Gris clair (pour les arrière-plans)
      paper: "#FFFFFF", // Blanc (pour les arrière-plans de conteneurs)
    },
  },
})

export default theme
