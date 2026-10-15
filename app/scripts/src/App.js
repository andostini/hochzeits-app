import React from "react";
import {
  Typography,
  Container,
  Grid,
  LinearProgress,
  Button,
  Box,
} from "@mui/material";
import DirectionsIcon from '@mui/icons-material/Directions';

import PageItem from "./PageItem";
import Programm from "./Programm";
import Questionaire from "./Questionaire";
import Stoeger from "./Stoeger";
import Hotel from "./Hotel";



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url_shortcode: url_shortcode,
      guests: null,
      hotels: [],
    };
  }

  componentDidMount() {
    this.getInfo();

  }

  getInfo() {
    fetch('/api/' + window.url_shortcode)
      .then(response => response.json())
      .then(data => {
        this.setState({ guests: data.guests || [] });
        console.log(data)
      });
    fetch("/api/hotels")
      .then(response => response.json())
      .then(data => {
        const hotels = (data.hotels || []).map(hotel => ({
          ...hotel,
          position: hotel.lat != null && hotel.lng != null
            ? [Number(hotel.lat), Number(hotel.lng)]
            : undefined,
        }));
        this.setState({ hotels });
      })

  }

  render() {
    if (this.state.guests == null || this.state.guests.length === 0) {
      return <LinearProgress aria-label="Loading…" />;
    }
    else {
      const selectedHotel = this.state.hotels.find(
        hotel => hotel.id === Number(this.state.guests[0].hotel)
      );
      
      const attendingXX = this.state.guests.some(guest => Boolean(guest.attending_xx));
      const attendingHike = this.state.guests.some(guest => Boolean(guest.attending_20_1));
      const attendingDinner = this.state.guests.some(guest => Boolean(guest.attending_20_2));
      const attendingBreakfast = this.state.guests.some(guest => Boolean(guest.attending_22));

      return (
        <>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "600px",
            maxHeight: "60vh",
            backgroundImage: "url(/static/img/DOG091801.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 27%",
            zIndex: -1,
          }}
        />
        <Container
          component="main"
          maxWidth={false}
          sx={{
            marginTop: "min(600px, 60vh)",
            bgcolor: "background.default",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2} maxWidth={"lg"} sx={{ mt: 2 }}>
            <Grid item xs={12} component="header" id="header">
              <Typography variant="h1">21. | August | 2027</Typography>
              <Typography variant="h2" style={{textTransform: "uppercase", fontSize: "1.5rem", marginTop: "1rem" }}>Wir freuen uns, mit euch gemeinsam zu feiern.</Typography>
            </Grid>
            <Grid item xs={12} component="section" id="anrede" aria-labelledby="welcome-heading">
              <Typography id="welcome-heading" variant="h3">
                {this.state.guests.map((guest, index) => (index === 0 ? guest.anrede.charAt(0).toUpperCase() + guest.anrede.slice(1) : guest.anrede) + ", ")}
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {this.state.guests[0].einleitung}
              </Typography>
              <Typography variant="body2" style={{marginTop: "1rem"}}>Auf dieser Seite haben wir ein paar wichtige Informationen für euch zusammengestellt, die wir auch im Laufe der nächsten Monate immer wieder aktualisieren werden.</Typography>
            </Grid>
            <Grid item xs={12} component="section" id="infos" aria-label="Hochzeitsinformationen">
              <PageItem
                id="venue"
                title="Die Stögeralm">
                <Stoeger />
              </PageItem>
              <PageItem
                id="schedule"
                title="Programm">
                <Programm />
              </PageItem>
              <PageItem
                id="travel"
                title="Anreise">
                <Typography variant="h5">Öffentlich</Typography>
                <Typography variant="body1">
                  Der Ort Schliersee ist mit der Bahn sehr gut zu erreichen. Vom Münchner Hauptbahnhof fährt stündlich um 26 Minuten nach ein Zug. Hier müsst ihr nur auf den richtigen Wagon achten, weil der Zug unterwegs getrennt wird und nur ein Wagon zum Schliersee fährt. Die Fahrt dauert 57 Minuten. <br /> Am Samstag Abend fährt der letzte Zug zurück um 22:59.
                </Typography>
                <Typography variant="h5">PKW</Typography>
                <Typography variant="body1">
                  Von München aus benötigt ihr 50 Minuten bis zum Ort Schliersee. Parken ist im Ort Schliersee an den meisten Parkplätzen nur bis zu 24 Stunden gegen Gebühr möglich. Daher am besten beim Hotel erkundigen. <br /> Am Samstag gibt es an der Stögeralm genügend Parkplätze für alle. <br />Für Samstag Abend organisieren wir einen Shuttle, der euch sicher von der Stögeralm in die Hotels in Schliersee bringt. Autos dürfen gerne über Nacht an der Stögeralm stehen gelassen werden.
                </Typography>
              </PageItem>
              <PageItem
                id="accommodation"
                title="Unterkunft">
                <Hotel guests={this.state.guests} hotels={this.state.hotels} />
              </PageItem>
              <PageItem
                id="credits"
                title="Credits"
                hidden={true}
                >
                <Typography variant="body1" style={{ textAlign: 'center' }}>
                  Trauzeugen - Marietheres Hnida & Daniel Bejko<br />
                  Trauredner - Torben Frey<br />
                  Musikalische Leitung - Sarah Geigenspieler<br />
                  Fotos - Laura Döring<br />
                </Typography>
              </PageItem>
              <PageItem
                id="questions"
                title="Ein paar Fragen ...">
                <Questionaire guests={this.state.guests} />
              </PageItem>
            </Grid>
            <Grid item xs={12}>
              <Box
                style={{
                  width: "100%",
                  height: "45vh",
                  backgroundImage: "url(/static/img/DOG09198.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
              >

              </Box>

            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<DirectionsIcon />}
                    href="https://maps.app.goo.gl/TAoNJhRfskXNyquN7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stögeralm
                  </Button>
                  
                </Grid>
                {selectedHotel?.googleMaps && (
                  <Grid item xs={6} md={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      startIcon={<DirectionsIcon />}
                      href={selectedHotel.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedHotel.name}
                    </Button>
                  </Grid>
                )}
                {attendingXX && (
                  <Grid item xs={6} md={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      startIcon={<DirectionsIcon />}
                      href="https://maps.app.goo.gl/TAoNJhRfskXNyquN7"
                      target="_blank"
                      disabled
                      rel="noopener noreferrer"
                    >
                      Standesamt München
                    </Button>
                  </Grid>
                )}
                {attendingHike && (
                  <Grid item xs={6} md={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      startIcon={<DirectionsIcon />}
                      href="https://maps.app.goo.gl/TAoNJhRfskXNyquN7"
                      target="_blank"
                      disabled
                      rel="noopener noreferrer"
                    >
                      Ausgangspunkt Wanderung
                    </Button>
                  </Grid>
                )}
                {attendingDinner && (
                  <Grid item xs={6} md={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      startIcon={<DirectionsIcon />}
                      href="https://maps.app.goo.gl/TAoNJhRfskXNyquN7"
                      target="_blank"
                      disabled
                      rel="noopener noreferrer"
                    >
                      Abendessen am Samstag
                    </Button>
                  </Grid>
                )}

                {attendingBreakfast && (
                  <Grid item xs={6} md={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      startIcon={<DirectionsIcon />}
                      href="https://maps.app.goo.gl/TAoNJhRfskXNyquN7"
                      target="_blank"
                      disabled
                      rel="noopener noreferrer"
                    >
                      Frühstück am Sonntag
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
        </>
      );
    }
  }
} 
