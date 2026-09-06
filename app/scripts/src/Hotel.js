
import React from "react";
import { Link, Button, Card, CardContent, CardMedia, Typography, CardActions , Grid, IconButton, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import DirectionsIcon from '@mui/icons-material/Directions';
import { MapContainer } from "react-leaflet";

import { CircleMarker, TileLayer, Marker, Popup } from "react-leaflet";


export default class Hotel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hotels: [],
            selectedHotel: props.guests[0]?.hotel ?? '',
            isSubmitting: false,
            submitted: false,
        };
    }

    componentDidMount() {
        this.setState({ hotels: this.props.hotels || [] });
    }

    componentDidUpdate(previousProps) {
        if (previousProps.hotels !== this.props.hotels) {
            this.setState({ hotels: this.props.hotels || [] });
        }
    }

    handleHotelChange = (event) => {
        this.setState({ selectedHotel: event.target.value, submitted: false });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { selectedHotel } = this.state;

        this.setState({ isSubmitting: true });
        Promise.all(this.props.guests.map(guest => fetch(`/api/guest/${guest.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ field: 'hotel', value: selectedHotel || null }),
        })))
            .then(responses => {
                if (!responses.every(response => response.ok)) {
                    throw new Error('Failed to save hotel selection');
                }
                this.setState({ submitted: true });
            })
            .catch(error => console.error(error))
            .finally(() => this.setState({ isSubmitting: false }));
    }

    render() {
        const hotelSelection = this.props.guests[0]?.hotel;
        const selectedHotel = this.state.hotels.find(hotel => hotel.id === Number(hotelSelection));

        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body" gutterBottom>
                        Eine kleine Auswahl an Hotelmöglichkeiten in direkter Umgebung zur Stögeralm. Bitte sagt uns gerne kurz Bescheid, wenn ihr hier eine Unterkunft gefunden habt.
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl fullWidth>
                            <InputLabel id="hotel-found-label">Habt ihr hier eine Unterkunft gefunden?</InputLabel>
                            <Select
                                id="hotel-found"
                                labelId="hotel-found-label"
                                label="Habt ihr hier eine Unterkunft gefunden?"
                                value={this.state.selectedHotel}
                                onChange={this.handleHotelChange}
                            >
                                <MenuItem value={null}>Keine Unterkunft ausgewählt</MenuItem>
                                <MenuItem value={99}>Ich fahre am Abend wieder nach Hause</MenuItem>
                                {this.state.hotels.map(hotel => (
                                    <MenuItem key={hotel.id} value={hotel.id}>{hotel.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }} disabled={this.state.isSubmitting}>
                            {this.state.isSubmitting ? 'Wird gespeichert...' : this.state.submitted ? 'Gespeichert' : 'Unterkunft speichern'}
                        </Button>
                    </form>
                </Grid>


                {hotelSelection == null && this.state.hotels.map(hotel => (
                    <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={hotel.image}
                                alt={hotel.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {hotel.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {hotel.address}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton color="primary" variant="contained" component={Link} href={`tel:${hotel.phone}`} aria-label={`Call ${hotel.name}`}>
                                    <PhoneIcon />
                                </IconButton>
                                <IconButton color="primary" variant="contained" component={Link} href={hotel.web} target="_blank" rel="noopener" aria-label={`Visit ${hotel.name} website`}>
                                    <LanguageIcon />
                                </IconButton>
                                <IconButton color="primary" variant="contained" component={Link} href={hotel.googleMaps} target="_blank" rel="noopener" aria-label={`Get directions to ${hotel.name}`}>
                                    <DirectionsIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                {Number(hotelSelection) === 99 && (
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            -
                        </Typography>
                    </Grid>
                )}
                {Number(hotelSelection) >= 1 && selectedHotel && (
                    <Grid item xs={12} key={selectedHotel.id}>
                        <Card>
                            <Grid container>
                                <Grid item xs={12} sm={4}>
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        image={selectedHotel.image}
                                        alt={selectedHotel.name}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Eure Unterkunft: {selectedHotel.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {selectedHotel.address}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton color="primary" component={Link} href={`tel:${selectedHotel.phone}`} aria-label={`Call ${selectedHotel.name}`}>
                                            <PhoneIcon />
                                        </IconButton>
                                        <IconButton color="primary" component={Link} href={selectedHotel.web} target="_blank" rel="noopener" aria-label={`Visit ${selectedHotel.name} website`}>
                                            <LanguageIcon />
                                        </IconButton>
                                        <IconButton color="primary" component={Link} href={selectedHotel.googleMaps} target="_blank" rel="noopener" aria-label={`Get directions to ${selectedHotel.name}`}>
                                            <DirectionsIcon />
                                        </IconButton>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                )}

                {hotelSelection != 99 && (
                    
                
                <Grid item xs={12}>
                    <MapContainer center={[ 47.7345883, 11.8723043]} zoom={15} style={{ height: "400px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {this.state.hotels
                            .filter(hotel => hotel.position && (
                                hotelSelection == null || hotel.id === Number(hotelSelection)
                            ))
                            .map(hotel => (
                                <Marker key={hotel.id} position={hotel.position}>
                                    <Popup>
                                        {hotel.name}<br />{hotel.address} <br />

                                        <IconButton color="primary" component={Link} href={`tel:${hotel.phone}`} aria-label={`Call ${hotel.name}`}>
                                            <PhoneIcon />
                                        </IconButton>
                                        <IconButton color="primary" component={Link} href={hotel.web} target="_blank" rel="noopener" aria-label={`Visit ${hotel.name} website`}>
                                            <LanguageIcon />
                                        </IconButton>
                                        <IconButton color="primary" component={Link} href={hotel.googleMaps} target="_blank" rel="noopener" aria-label={`Get directions to ${hotel.name}`}>
                                            <DirectionsIcon />
                                        </IconButton>
                                    </Popup>
                                </Marker>
                            ))}
                            
                        <CircleMarker
                            center={[47.7345883, 11.8723043]}
                            pathOptions={{ color: "#c62828", fillColor: "#c62828", fillOpacity: 1 }}
                            radius={8}
                        >
                            <Popup>Die Stögeralm<hr />
                                        <IconButton color="primary" component={Link} href="https://www.stoegeralm.de/" target="_blank" rel="noopener" aria-label={`Visit Die Stögeralm website`}>
                                            <LanguageIcon />
                                        </IconButton>
                                        <IconButton color="primary" component={Link} href="https://www.google.com/maps/search/?api=1&query=Die+Stögeralm%2C+Schliersee" target="_blank" rel="noopener" aria-label={`Get directions to Die Stögeralm`}>
                                            <DirectionsIcon />
                                        </IconButton></Popup>
                        </CircleMarker>
                    </MapContainer>
                </Grid>)}
            </Grid>
        )
    }
}