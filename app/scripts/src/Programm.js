
import React from "react";
import {  Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default class Programm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TableContainer>
                <Table>
                    <TableBody>

                        <TableRow>
                            <TableCell colSpan={2}><Typography variant="h6">Noch nicht bekannt</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Standesamtliche Trauung</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell colSpan={2}><Typography variant="h6">Freitag, 20.08.2027</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Nachmittags:</TableCell>
                            <TableCell>Wanderung von Schliersee über Kreuzeckalm und Gindelalm mit Einkehr</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Abends:</TableCell>
                            <TableCell>Gemeinsames Abendessen im Restaurant ...</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell colSpan={2}><Typography variant="h6">Samstag, 21.08.2027</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Ganztags:</TableCell>
                            <TableCell>Zeremonie & Feier in der Stögeralm. <br /> Details folgen.</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell colSpan={2}><Typography variant="h6">Sonntag, 22.08.2027</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Morgens:</TableCell>
                            <TableCell>Frühstück</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>danach</TableCell>
                            <TableCell>Abreise</TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>
        )
    }
}