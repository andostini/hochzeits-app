import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Home({ notFound = false }) {
	return (
		<Container component="main" maxWidth="sm" sx={{ mt: 6, textAlign: 'center' }}>
			<Typography variant="h1">Pamina & Fabian</Typography>
			<Typography variant="body1" sx={{ mt: 2 }}>
				{notFound ? 'Diese Seite wurde nicht gefunden.' : 'Hochzeit am 21.08.2027'}
			</Typography>
		</Container>
	);
}
