import React from 'react';
import { Button, Container, Typography, Box, Checkbox, IconButton, Link, MenuItem, Select, TextField, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';

const groupOrder = [
    'Paminas Familie',
    'Fabians Familie',
    'Canis Resort',
    'Film',
    'Gemeinsame Freunde',
    'Paminas Freunde',
    'Fabians Freunde',
    'Uni',
];

const groupColors = {
    'Paminas Familie': '#5B8C5A',
    'Fabians Familie': '#4B77A8',
    'Canis Resort': '#8A4F3D',
    'Film': '#6D5AA6',
    'Gemeinsame Freunde': '#E0B93B',
    'Paminas Freunde': '#C98791',
    'Fabians Freunde': '#4F8B6B',
    'Uni': '#8B5EA7',
};

const sortGuests = (guests) => [...guests].sort((firstGuest, secondGuest) => {
    const firstGroupIndex = groupOrder.indexOf(firstGuest.Gruppe);
    const secondGroupIndex = groupOrder.indexOf(secondGuest.Gruppe);
    const firstRank = firstGroupIndex === -1 ? groupOrder.length : firstGroupIndex;
    const secondRank = secondGroupIndex === -1 ? groupOrder.length : secondGroupIndex;

    return firstRank - secondRank || firstGuest.url_shortcode.localeCompare(secondGuest.url_shortcode);
});

class EinleitungDialog extends React.Component {
    state = {
        value: this.props.value || '',
    };

    handleSave = () => {
        this.props.onSave(this.state.value);
    };

    render() {
        const { open, onClose, saving } = this.props;

        return (
            <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
                <DialogTitle>Einleitung bearbeiten</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        fullWidth
                        multiline
                        rows={10}
                        value={this.state.value}
                        onChange={(event) => this.setState({ value: event.target.value })}
                        onKeyDown={(event) => event.stopPropagation()}
                        margin="dense"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} disabled={saving}>
                        Abbrechen
                    </Button>
                    <Button onClick={this.handleSave} variant="contained" disabled={saving}>
                        Speichern
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: [],
            hotels: [],
            einleitungDialogGuest: null,
            einleitungDialogSaving: false,
            deleteDialogGuest: null,
            deleteDialogDeleting: false,
        };
    }

    componentDidMount() {
        fetch('/api/guests')
            .then(response => response.json())
            .then(data => this.setState({ guests: sortGuests(data.guests) }));

        fetch('/api/hotels')
            .then(response => response.json())
            .then(data => this.setState({ hotels: data.hotels }));
    }

    handleCheckboxChange = (params, event) => {
        const { id, field } = params;
        const value = event.target.checked;
        this.setState(prevState => ({
            guests: prevState.guests.map(guest => guest.id === id ? { ...guest, [field]: value } : guest)
        }));


        fetch(`/api/guest/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                field: field,
                value: value
            })
        }).then(response => {
            if (!response.ok) {
                console.error('Failed to update attendance');
            }
        }).catch(error => {
            console.error('Error:', error);
        });

    };

    handleEditCellChange = (params, event) => {
        const { id, field } = params;
        const value = event.target.value;
        params.api.setEditCellValue({ id, field, value }, event);
    };

    handleHotelEditChange = (params, event) => {
        const value = event.target.value === '' ? null : Number(event.target.value);
        params.api.setEditCellValue({ id: params.id, field: params.field, value }, event);
        params.api.stopCellEditMode({ id: params.id, field: params.field });
    };

    handleRowUpdate = (updatedGuest, originalGuest) => {
        const changedField = Object.keys(updatedGuest).find(
            field => updatedGuest[field] !== originalGuest[field]
        );

        if (!changedField) {
            return updatedGuest;
        }

        console.log(`Updating guest ${updatedGuest.id} with ${changedField} = ${updatedGuest[changedField]}`);
        if (changedField === 'hotel') {
            const guestsInInvitation = this.state.guests.filter(
                guest => guest.url_shortcode === updatedGuest.url_shortcode
            );

            return Promise.all(guestsInInvitation.map(guest => fetch(`/api/guest/${guest.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    field: 'hotel',
                    value: updatedGuest.hotel
                })
            }))).then(responses => {
                if (!responses.every(response => response.ok)) {
                    throw new Error('Failed to update hotel selection');
                }
                this.setState(previousState => ({
                    guests: previousState.guests.map(guest =>
                        guest.url_shortcode === updatedGuest.url_shortcode
                            ? { ...guest, hotel: updatedGuest.hotel }
                            : guest
                    )
                }));
                return updatedGuest;
            });
        }

        return fetch(`/api/guest/${updatedGuest.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                field: changedField,
                value: updatedGuest[changedField]
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to update guest');
            }
            this.setState(prevState => ({
                guests: prevState.guests.map(guest => guest.id === updatedGuest.id ? updatedGuest : guest)
            }));
            return updatedGuest;
        });
    };

    handleRowUpdateError = (error) => {
        console.error('Failed to save guest changes:', error);
    };

    handleCellDoubleClick = (params) => {
        if (params.field !== 'einleitung') {
            return;
        }

        this.setState({
            einleitungDialogGuest: params.row,
        });
    };

    handleEinleitungDialogClose = () => {
        if (!this.state.einleitungDialogSaving) {
            this.setState({ einleitungDialogGuest: null });
        }
    };

    handleEinleitungDialogSave = (einleitungDialogValue) => {
        const { einleitungDialogGuest } = this.state;
        if (!einleitungDialogGuest) {
            return;
        }

        this.setState({ einleitungDialogSaving: true });
        fetch(`/api/guest/${einleitungDialogGuest.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                field: 'einleitung',
                value: einleitungDialogValue
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to update introduction');
            }

            this.setState(previousState => ({
                guests: previousState.guests.map(guest =>
                    guest.id === einleitungDialogGuest.id
                        ? { ...guest, einleitung: einleitungDialogValue }
                        : guest
                ),
                einleitungDialogGuest: null,
                einleitungDialogSaving: false,
            }));
        }).catch(error => {
            console.error('Failed to save introduction:', error);
            this.setState({ einleitungDialogSaving: false });
        });
    };


    handleGenerateInvitations = () => { 
        fetch('/api/invitations')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to generate invitations');
                }
                return response.blob();
            })
            .then(zip => {
                const downloadUrl = URL.createObjectURL(zip);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = 'hochzeitseinladungen.zip';
                link.click();
                URL.revokeObjectURL(downloadUrl);
            })
            .catch(error => {
                console.error('Error generating invitations:', error);
            });

    }

    addGuest = () => {
        fetch('/api/addGuest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
        }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to add guest');
            }
            return response.json();
        }).then(newGuest => {
            this.setState(previousState => ({
                guests: [...previousState.guests, newGuest.guest]
            }));
        }).catch(error => {
            console.error('Error adding guest:', error);
        });
    };

    handleDeleteGuest = (guest) => {
        this.setState({ deleteDialogGuest: guest });
    };

    handleDeleteDialogClose = () => {
        if (!this.state.deleteDialogDeleting) {
            this.setState({ deleteDialogGuest: null });
        }
    };

    handleDeleteDialogConfirm = () => {
        const { deleteDialogGuest } = this.state;
        if (!deleteDialogGuest) {
            return;
        }

        this.setState({ deleteDialogDeleting: true });
        fetch('/api/deleteGuest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: deleteDialogGuest.id })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete guest');
            }
            this.setState(previousState => ({
                guests: previousState.guests.filter(guest => guest.id !== deleteDialogGuest.id),
                deleteDialogGuest: null,
                deleteDialogDeleting: false,
            }));
        }).catch(error => {
            console.error('Error deleting guest:', error);
            this.setState({ deleteDialogDeleting: false });
        });
    };

    render() {
        console.log(this.state.guests); // Debugging:
        return (
            <Container component="main" maxWidth={false} sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h1">Verwaltung</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ minWidth: 0 }}>

                        <Box sx={{ width: '100%'}}>
                            <DataGrid
                                rows={this.state.guests}
                                onCellDoubleClick={this.handleCellDoubleClick}
                                processRowUpdate={this.handleRowUpdate}
                                onProcessRowUpdateError={this.handleRowUpdateError}
                                columns={[
                                    {
                                        field: 'color_code',
                                        headerName: '',
                                        width: 16,
                                        sortable: false,
                                        filterable: false,
                                        disableColumnMenu: true,
                                        renderCell: (params) => (
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: groupColors[params.row.Gruppe] || 'transparent',
                                                }}
                                            />
                                        ),
                                    },
                                    { field: 'id', headerName: 'ID', width: 10 },
                                    { field: 'url_shortcode', headerName: 'URL Shortcode', editable: true, renderCell: (params) => (<Link href={`/${params.value}`} target="_blank" rel="noopener">{params.value}</Link>) },
                                    { field: 'Gruppe', headerName: 'Gruppe', editable: true },
                                    { field: 'name', headerName: 'Name', editable: true },
                                    { field: 'anrede', headerName: 'Anrede', editable: true },
                                    {
                                        field: 'einleitung',
                                        headerName: 'Einleitung',
                                        width: 300,
                                    },
                                    { field: 'email', headerName: 'Email', editable: true },
                                    {
                                        field: 'hotel',
                                        headerName: 'Hotel',
                                        editable: true,
                                        renderCell: (params) => {
                                            if (params.value == null) {
                                                return '';
                                            }
                                            if (Number(params.value) === 99) {
                                                return 'Fährt nach Hause';
                                            }
                                            return this.state.hotels.find(hotel => hotel.id === Number(params.value))?.name || params.value;
                                        },
                                        renderEditCell: (params) => (
                                            <Select
                                                autoFocus
                                                fullWidth
                                                value={params.value ?? ''}
                                                onChange={(event) => this.handleHotelEditChange(params, event)}
                                            >
                                                <MenuItem value="">Keine Unterkunft ausgewählt</MenuItem>
                                                <MenuItem value={99}>Fährt nach Hause</MenuItem>
                                                {this.state.hotels.map(hotel => (
                                                    <MenuItem key={hotel.id} value={hotel.id}>{hotel.name}</MenuItem>
                                                ))}
                                            </Select>
                                        ),
                                    },
                                    { field: 'show_xx', headerName: 'Ask Standesamt', renderCell: (params) => (<Checkbox checked={Boolean(params.value)} onChange={(e) => this.handleCheckboxChange(params, e)} />) },
                                    { field: 'ask_plus_one', headerName: 'Ask Plus One', renderCell: (params) => (<Checkbox checked={Boolean(params.value)} onChange={(e) => this.handleCheckboxChange(params, e)} />) },
                                    { field: 'attending_xx', headerName: 'Standesamt', renderCell: (params) => (<Checkbox checked={Boolean(params.value)} onChange={(e) => this.handleCheckboxChange(params, e)} />) },
                                    { field: 'attending_20_1', headerName: 'Wanderung', renderCell: (params) => (<Checkbox checked={Boolean(params.value)} onChange={(e) => this.handleCheckboxChange(params, e)} />) },
                                    { field: 'attending_20_2', headerName: 'Abendessen', renderCell: (params) => (<Checkbox checked={Boolean(params.value)} onChange={(e) => this.handleCheckboxChange(params, e)} />) },
                                    { field: 'attending_21', headerName: 'Feier', renderCell: (params) => (<Checkbox checked={Boolean(params.value)} onChange={(e) => this.handleCheckboxChange(params, e)} />) },
                                    { field: 'attending_22', headerName: 'Frühstück', renderCell: (params) => (<Checkbox checked={Boolean(params.value)} onChange={(e) => this.handleCheckboxChange(params, e)} />) },
                                    { field: 'plus_one', headerName: 'Plus One', renderCell: (params) => (<Checkbox checked={Boolean(params.value)} onChange={(e) => this.handleCheckboxChange(params, e)} />) },
                                    { field: 'allergies', headerName: 'Allergien' },
                                    { field: 'umfrage', headerName: 'Umfrage' },
                                    {
                                        field: 'delete',
                                        headerName: '',
                                        width: 60,
                                        sortable: false,
                                        filterable: false,
                                        disableColumnMenu: true,
                                        renderCell: (params) => (
                                            <IconButton onClick={() => this.handleDeleteGuest(params.row)} size="small">
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        ),
                                    },
                                ]}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.addGuest}
                        >
                            + Gast 
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleGenerateInvitations}
                        >
                            Einladungen generieren
                        </Button>
                    </Grid>
                </Grid>

                <EinleitungDialog
                    open={Boolean(this.state.einleitungDialogGuest)}
                    key={this.state.einleitungDialogGuest?.id}
                    value={this.state.einleitungDialogGuest?.einleitung}
                    onClose={this.handleEinleitungDialogClose}
                    onSave={this.handleEinleitungDialogSave}
                    saving={this.state.einleitungDialogSaving}
                />

                <Dialog open={Boolean(this.state.deleteDialogGuest)} onClose={this.handleDeleteDialogClose}>
                    <DialogTitle>Gast löschen</DialogTitle>
                    <DialogContent>
                        Möchtest du {this.state.deleteDialogGuest?.name || 'diesen Gast'} wirklich löschen?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDeleteDialogClose} disabled={this.state.deleteDialogDeleting}>
                            Abbrechen
                        </Button>
                        <Button onClick={this.handleDeleteDialogConfirm} variant="contained" color="error" disabled={this.state.deleteDialogDeleting}>
                            Löschen
                        </Button>
                    </DialogActions>
                </Dialog>

            </Container>
        );
    }
}