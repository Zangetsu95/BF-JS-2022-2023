import { Box, Button, Container, Typography } from "@mui/material"

function HomePage() {
  return (
    <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Bienvenue sur mon site !
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Ici, vous trouverez tout ce que vous devez savoir sur mes projets, mes
          intérêts et mes compétences.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
          <Button variant="contained" href="/product" sx={{ mr: 2 }}>
            Voir mes projets
          </Button>
          <Button variant="outlined" href="/contact">
            Me contacter
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePage
