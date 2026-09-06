
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default class PageItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const headingId = `${this.props.id}-heading`;

        return (
            <Accordion component="section" id={this.props.id}>
                <AccordionSummary
                    aria-controls={`${this.props.id}-content`}
                    id={headingId}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h4">{this.props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails id={`${this.props.id}-content`} aria-labelledby={headingId}>
                    {this.props.children}
                </AccordionDetails>
            </Accordion>
        )
    }
}