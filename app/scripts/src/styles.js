import { createTheme } from '@mui/material/styles';

const pine = '#29473A';
const rose = '#B86D62';
const gold = '#B49455';
const ivory = '#FCF8F1';
const ink = '#25302A';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: pine, contrastText: ivory },
    secondary: { main: rose, contrastText: ivory },
    background: { default: ivory, paper: '#FFFDF8' },
    text: { primary: ink, secondary: '#5D665E' },
    divider: '#D9CCB7',
  },
  typography: {
    fontFamily: 'Trebuchet MS, Verdana, sans-serif',
    h1: {
      fontFamily: '"EB Garamond", Georgia, Times New Roman, serif',
      fontSize: '4.25rem',
      fontWeight: 400,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      lineHeight: 1.1,
      color: pine,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", Georgia, Times New Roman, serif',
      fontSize: '2.6rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: gold,
    },
    h3: {
      fontFamily: 'Georgia, Times New Roman, serif',
      fontSize: '1.7rem',
      fontWeight: 400,
      color: pine,
    },
    h4: {
      fontFamily: 'Georgia, Times New Roman, serif',
      fontSize: '1.35rem',
      fontWeight: 400,
    },
    h5: { fontWeight: 700, color: pine, marginTop: '1rem' },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { lineHeight: 1.5 },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: { paddingBottom: '3rem' },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '&#header': {
            textAlign: 'center',
            paddingTop: '2.5rem',
            paddingBottom: '1.75rem',
            borderBottom: `1px solid ${gold}`,
          },
          '&#anrede': {
            maxWidth: '46rem',
            margin: '1.5rem auto 0',
            textAlign: 'center',
          },
          '&#infos': { marginTop: '1rem' },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: '0.75rem',
          border: '1px solid #E1D7C8',
          boxShadow: 'none',
          overflow: 'hidden',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: '0 0 0.75rem' },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: '4.25rem',
          padding: '0 1.25rem',
          backgroundColor: '#FFFDF8',
          '&.Mui-expanded': { minHeight: '4.25rem', backgroundColor: '#F5EFE4' },
        },
        content: {
          margin: '0.75rem 0',
          '&.Mui-expanded': { margin: '0.75rem 0' },
        },
        expandIconWrapper: { color: rose },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: '1.5rem 1.25rem 1.75rem', borderTop: '1px solid #EAE1D5' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: '1px solid #E1D7C8', boxShadow: 'none', backgroundColor: '#FFFDF8' },
      },
    },
    MuiCardMedia: {
      styleOverrides: { root: { borderBottom: `3px solid ${gold}` } },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: '#EAE1D5', padding: '0.8rem' },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: pine,
          '&:hover': { backgroundColor: '#F4E7E2', color: rose },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: { root: { color: pine, fontWeight: 700 } },
    },
    MuiRadio: {
      styleOverrides: { root: { color: gold, '&.Mui-checked': { color: rose } } },
    },
  },
});

export default theme;