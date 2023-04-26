import { Box, Button, Card, Container, Grid, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Link, useNavigate } from "react-router-dom"
import backgroundImage from "../../utils/image/background-home.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import theme from "../../containers/theme/theme"
import { useSelector } from "react-redux"

function HomePage() {
  const [weather, setWeather] = useState(null)
  const [weatherIcon, setWeatherIcon] = useState(null)
  const isAdmin = useSelector((state) => state.auth.userRole == "admin")
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Bruxelles&units=metric&appid=dc8c9152e8adaad0ec8bf635818c0d42`
        )
        setWeather(response.data)
        setWeatherIcon(
          `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        )
      } catch (error) {
        console.error("Erreur lors de la récupération de la météo", error)
      }
    }
    fetchWeather()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            py: 4,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ color: "white" }}
            >
              {isAdmin
                ? "Bienvenue Administrateur"
                : "Bienvenue sur DunderMifflinCo"}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              {isAdmin
                ? "Vous pouvez maintenant accèder a votre dashboard"
                : "Ici, vous trouverez un large éventail de produit pour votre entreprise"}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
              {/* <FaTwitterSquare sx={{ mr: 2 }} size={32} />
              <FaLinkedin sx={{ mr: 2 }} size={32} />
              <FaInstagramSquare size={32} /> */}
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            py: 4,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="md">
            <Grid container justifyContent="center">
              <Grid item md={6}>
                <Card
                  sx={{ p: 2, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                >
                  <Typography
                    variant="h4"
                    align="center"
                    color="text.secondary"
                    gutterBottom
                  >
                    {isAdmin
                      ? "Que pouvez vous faire maintenant?"
                      : " À propos de notre entreprise"}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    gutterBottom
                  >
                    {isAdmin
                      ? "Vous pouvez mainteant accéder a votre dashboard !"
                      : `DunderMifflinCo est une entreprise spécialisée dans la vente de produits pour les entreprises. 
                          Nous offrons une large gamme de produits 
                          pour répondre à tous vos besoins, allant des fournitures de bureau aux équipements de sécurité.`}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    gutterBottom
                  >
                    {isAdmin
                      ? "Vous pourrez voir vos produits,stock,fournisseur et passer une commande"
                      : `Notre mission est de fournir des produits de haute qualité à
                      des prix compétitifs, tout en offrant un excellent service à
                      la clientèle. Nous travaillons dur pour répondre aux besoins
                      de nos clients et pour fournir des solutions adaptées à
                      leurs besoins spécifiques.`}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      pt: 4,
                    }}
                  >
                    {isAdmin ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          pt: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => navigate("/admin")}
                          sx={{ mr: 2 }}
                        >
                          Accéder au tableau de bord
                        </Button>
                      </Box>
                    ) : (
                      <>
                        {isAuthenticated ? (
                          <>
                            <Button
                              variant="contained"
                              onClick={() => navigate("/product")}
                              sx={{ mr: 2 }}
                            >
                              Voir nos produits
                            </Button>
                            <Button variant="outlined" href="/contact">
                              Nous contacter
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="contained"
                              onClick={() => navigate("/login")}
                              sx={{ mr: 2 }}
                            >
                              Voir nos produits
                            </Button>
                            <Button variant="outlined" href="/contact">
                              Nous contacter
                            </Button>
                          </>
                        )}
                      </>
                    )}
                  </Box>
                </Card>
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
              © 2023 DunderMifflinCo - Tous droits réservés
            </Typography>
            {weather && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={weatherIcon}
                  alt={`Météo : ${weather.weather[0].description}`}
                />
                <Typography variant="body1" align="center" color="white">
                  {`Météo à Bruxelles : ${weather.weather[0].description}, ${weather.main.temp}°C`}
                </Typography>
              </Box>
            )}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default HomePage
