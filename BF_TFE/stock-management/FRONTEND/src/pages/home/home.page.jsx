import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Link } from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500", // changement de couleur primaire en orange
    },
    secondary: {
      main: "#000000", // changement de couleur secondaire en noir
    },
  },
})

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Box sx={{ bgcolor: "primary.main", py: 4 }}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bienvenue sur Don Quichotte SPRL
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              Ici, vous trouverez un large éventail de produit pour votre
              entreprise
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
              {/* <FaTwitterSquare sx={{ mr: 2 }} size={32} />
            <FaLinkedin sx={{ mr: 2 }} size={32} />
            <FaInstagramSquare size={32} /> */}
            </Box>
          </Container>
        </Box>
        <Box sx={{ py: 4 }}>
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <Grid item md={6}>
                <Typography
                  variant="h4"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  À propos de notre entreprise
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  color="text.secondary"
                  gutterBottom
                >
                  Don Quichotte SPRL est une entreprise spécialisée dans la
                  vente de produits pour les entreprises. Nous offrons une large
                  gamme de produits pour répondre à tous vos besoins, allant des
                  fournitures de bureau aux équipements de sécurité.
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  color="text.secondary"
                  gutterBottom
                >
                  Notre mission est de fournir des produits de haute qualité à
                  des prix compétitifs, tout en offrant un excellent service à
                  la clientèle. Nous travaillons dur pour répondre aux besoins
                  de nos clients et pour fournir des solutions adaptées à leurs
                  besoins spécifiques.
                </Typography>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", pt: 4 }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/product"
                    sx={{ mr: 2 }}
                  >
                    Voir nos produits
                  </Button>
                  <Button variant="outlined" href="/contact">
                    Nous contacter
                  </Button>
                </Box>
              </Grid>
              <Grid item md={6}>
                {/* <img src={graphic} alt="Illustration" style={{ width: "100%" }} /> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ bgcolor: "secondary.main", py: 4 }}>
          <Container maxWidth="md">
            <Typography
              variant="body1"
              align="center"
              color="white"
              gutterBottom
            >
              © 2023 Don Quichotte SPRL - Tous droits réservés
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default HomePage
