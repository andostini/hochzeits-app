
import React from "react";
import { Typography, FormControl, TextField, RadioGroup, Checkbox, FormControlLabel, Radio, TableContainer, Table, TableBody, TableRow, TableCell, TableHead, Grid } from "@mui/material";



export default class Questionaire extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guests: props.guests.map(guest => ({ ...guest }))
        };
    }

    handleAttendanceChange = (guestId, event) => {
        const { name, checked } = event.target;

        this.setState(previousState => ({
            guests: previousState.guests.map(guest =>
                guest.id === guestId ? { ...guest, [name]: checked } : guest
            )
        }));

        fetch(`/api/guest/${guestId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                field: name,
                value: checked
            })
        }).then(response => {
            if (!response.ok) {
                console.error('Failed to update attendance');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }

    handleUmfrageChange = (guestId, event) => {
        const { value } = event.target;

        this.setState(previousState => ({
            guests: previousState.guests.map(guest =>
                guest.id === guestId ? { ...guest, umfrage: value } : guest
            )
        }));

        fetch(`/api/guest/${guestId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                field: 'umfrage',
                value
            })
        }).then(response => {
            if (!response.ok) {
                console.error('Failed to update umfrage');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }

    handleAllergiesBlur = (guestId, event) => {
        fetch(`/api/guest/${guestId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                field: 'allergies',
                value: event.target.value
            })
        }).then(response => {
            if (!response.ok) {
                console.error('Failed to update allergies');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }


    render() {
        const { guests } = this.state;

        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1">Bitte gebt uns Bescheid, an welchen Programmpunkten ihr teilnehmen werdet:</Typography>
                </Grid>
                <Grid item xs={12}>
                <FormControl fullWidth={true}>
                    <TableContainer >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Programmpunkt</TableCell>
                                    {guests.map(guest => (
                                        <TableCell key={guest.id}>{guest.name}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                
                                {guests.some(guest => guest.ask_plus_one) && (
                                <TableRow>
                                    <TableCell>Bringst du eine +1 mit?</TableCell>
                                    {guests.map(guest => (
                                    <TableCell key={guest.id}>
                                        <RadioGroup name="plus_one">
                                            <FormControlLabel control={<Checkbox checked={Boolean(guest.plus_one)} />} name="plus_one" label="Ja" onChange={(event) => this.handleAttendanceChange(guest.id, event)} />
                                        </RadioGroup>
                                    </TableCell>
                                    ))}
                                </TableRow>
                                )}


                                {guests.some(guest => guest.show_xx) && (
                                    
                                <TableRow>
                                    <TableCell>Standesamtlich <Typography variant="body2" color="textSecondary">(Termin folgt)</Typography></TableCell>
                                    {guests.map(guest => (

                                    
                                    <TableCell key={guest.id}>
                                        <RadioGroup name="attending_xx">
                                            <FormControlLabel control={<Checkbox checked={Boolean(guest.attending_xx)} />} name="attending_xx" label="Ja" onChange={(event) => this.handleAttendanceChange(guest.id, event)} />
                                        </RadioGroup>
                                    </TableCell>
                                    ))}
                                </TableRow>
                                )}



                                <TableRow>
                                    <TableCell>20.08. Wanderung</TableCell>
                                    {guests.map(guest => (
                                    <TableCell key={guest.id}>
                                        <RadioGroup name="attending_20_1">
                                            <FormControlLabel control={<Checkbox checked={Boolean(guest.attending_20_1)} />} name="attending_20_1" label="Ja" onChange={(event) => this.handleAttendanceChange(guest.id, event)} />
                                        </RadioGroup>
                                    </TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell>20.08. Abendessen</TableCell>
                                    {guests.map(guest => (
                                    <TableCell key={guest.id}>
                                        <RadioGroup name="attending_20_2">
                                            <FormControlLabel control={<Checkbox checked={Boolean(guest.attending_20_2)} />} name="attending_20_2" label="Ja" onChange={(event) => this.handleAttendanceChange(guest.id, event)} />
                                        </RadioGroup>
                                    </TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell>21.08. Feier</TableCell>
                                    {guests.map(guest => (
                                    <TableCell key={guest.id}>
                                        <RadioGroup name="attending_21">
                                            <FormControlLabel control={<Checkbox checked={Boolean(guest.attending_21)} />} name="attending_21" label="Ja" onChange={(event) => this.handleAttendanceChange(guest.id, event)} />
                                        </RadioGroup>
                                    </TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell>22.08. Frühstück in Schliersee</TableCell>
                                    {guests.map(guest => (
                                    <TableCell key={guest.id}>
                                        <RadioGroup name="attending_22">
                                            <FormControlLabel control={<Checkbox checked={Boolean(guest.attending_22)} />} name="attending_22" label="Ja" onChange={(event) => this.handleAttendanceChange(guest.id, event)} />
                                        </RadioGroup>
                                    </TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell>Lebensmittelallergien</TableCell>
                                    {guests.map(guest => (
                                    <TableCell key={guest.id}>
                                        <TextField value={guest.allergies || ''} onChange={(event) => this.setState(previousState => ({ guests: previousState.guests.map(g => g.id === guest.id ? { ...g, allergies: event.target.value } : g) }))} onBlur={(event) => this.handleAllergiesBlur(guest.id, event)} />
                                    </TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell>Welchen Namen sollen wir annehmen?</TableCell>
                                    {guests.map(guest => (
                                    <TableCell key={guest.id}>
                                        <RadioGroup name={`umfrage_${guest.id}`} value={guest.umfrage || ''} onChange={(event) => this.handleUmfrageChange(guest.id, event)}>
                                            <FormControlLabel value="See" control={<Radio />} label="See" />
                                            <FormControlLabel value="Decker" control={<Radio />} label="Decker" />
                                        </RadioGroup>
                                    </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </FormControl>
                </Grid>
            </Grid>
        )
    }
}