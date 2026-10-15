import { createTheme } from '@mui/material/styles';

const olive = '#AAA88A';
const paleOlive = '#F5F4EE';
const ink = '#30302A';
const background = '#FFFBF5';
const paper = '#FFFFFF';
const border = '#E6E4DA';
const softBorder = '#ECEAE2';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: ink, contrastText: paper },
    secondary: { main: olive, contrastText: ink },
    background: { default: background, paper },
    text: { primary: ink, secondary: '#656359' },
    divider: border,
  },
  typography: {
    fontFamily: '"EB Garamond", Georgia, "Times New Roman", serif',
    h1: {
      fontFamily: '"Playfair Display", "Bodoni 72", Didot, Georgia, serif',
      fontSize: '4rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.1,
      color: ink,
    },
    h2: {
      fontFamily: '"EB Garamond", Georgia, "Times New Roman", serif',
      fontSize: '2.6rem',
      fontWeight: 400,
      color: ink,
    },
    h3: {
      fontFamily: '"EB Garamond", Georgia, "Times New Roman", serif',
      fontSize: '1.7rem',
      fontWeight: 600,
      color: ink,
    },
    h4: {
      fontFamily: '"EB Garamond", Georgia, "Times New Roman", serif',
      fontSize: '1.35rem',
      fontWeight: 600,
      color: ink,
    },
    h5: {
      fontFamily: '"EB Garamond", Georgia, "Times New Roman", serif',
      fontWeight: 600,
      color: ink,
      marginTop: '1rem',
    },
    h6: {
      fontFamily: '"EB Garamond", Georgia, "Times New Roman", serif',
      fontWeight: 600,
      color: ink,
    },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { lineHeight: 1.5 },
  },
  shape: { borderRadius: 3 },
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
            borderBottom: `1px solid ${border}`,
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
          border: `1px solid ${border}`,
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
          backgroundColor: paper,
          '&.Mui-expanded': { minHeight: '4.25rem', backgroundColor: paleOlive },
        },
        content: {
          margin: '0.75rem 0',
          '&.Mui-expanded': { margin: '0.75rem 0' },
        },
        expandIconWrapper: { color: olive },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: '1.5rem 1.25rem 1.75rem', borderTop: `1px solid ${softBorder}` },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: `1px solid ${border}`, boxShadow: 'none', backgroundColor: paper },
      },
    },
    MuiCardMedia: {
      styleOverrides: { root: { borderBottom: `3px solid ${olive}` } },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: softBorder, padding: '0.8rem' },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: ink,
          '&:hover': { backgroundColor: paleOlive, color: ink },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: { root: { color: ink, fontWeight: 600 } },
    },
    MuiRadio: {
      styleOverrides: { root: { color: olive, '&.Mui-checked': { color: ink } } },
    },
  },
});

export default theme;