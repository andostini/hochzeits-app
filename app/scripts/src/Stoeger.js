
import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import DirectionsIcon from '@mui/icons-material/Directions';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});


export default class Stoeger extends React.Component {
    render() {
        return (
            <Stack spacing={3}>
                <Box component="section" aria-labelledby="venue-introduction">
                    <Typography variant="overline" color="secondary.main">
                        Schliersee
                    </Typography>
                    <Typography id="venue-introduction" variant="h3" sx={{ mb: 1 }}>
                        Unsere Location
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '46rem' }}>
                        Die Stögeralm liegt 120 Meter über dem Schliersee mit einer wunderschönen Aussicht auf selbigen und die umliegenden Voralpenlandschaft.
                    </Typography>
                </Box>

                <Box component="section" aria-label="Impressionen der Stögeralm">
                    <Box
                        component="img"
                        src="/static/img/stoeger-1.png"
                        alt="Blick auf die Stögeralm"
                        sx={{
                            display: 'block',
                            width: '100%',
                            aspectRatio: { xs: '4 / 3', md: '16 / 7' },
                            objectFit: 'cover',
                            borderRadius: 1,
                            borderBottom: '4px solid',
                            borderColor: 'secondary.main',
                        }}
                    />
                    <Grid container spacing={1} sx={{ mt: 0 }}>
                        {[
                            ['stoeger-2.png', 'Ausblick von der Stögeralm'],
                            ['stoeger-3.png', 'Details der Stögeralm'],
                            ['stoeger-4.png', 'Die Umgebung der Stögeralm'],
                        ].map(([image, alt]) => (
                            <Grid item xs={4} key={image}>
                                <Box
                                    component="img"
                                    src={`/static/img/${image}`}
                                    alt={alt}
                                    loading="lazy"
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        aspectRatio: '1',
                                        objectFit: 'cover',
                                        borderRadius: 1,
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box component="section" aria-labelledby="venue-location">
                    <Typography id="venue-location" variant="h4" sx={{ mb: 0.5 }}>
                        Lage
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                        Stögeralm, Schliersee
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        startIcon={<DirectionsIcon />}
                        href="https://maps.app.goo.gl/TAoNJhRfskXNyquN7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Route planen
                    </Button>
                    <Box sx={{ mt: 2, overflow: 'hidden', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
                        <MapContainer center={[47.7345883, 11.8723043]} zoom={15} style={{ height: '340px', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[47.7345883, 11.8723043]}>
                                <Popup>Die Stögeralm</Popup>
                            </Marker>
                        </MapContainer>
                    </Box>
                </Box>
            </Stack>
        )
    }
}