import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Admin from './Admin';
import Home from './Home';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles';

const content = pageNotFound
  ? <Home notFound />
  : window.location.pathname === '/admin'
  ? <Admin />
  : window.location.pathname === '/' && url_shortcode == null
    ? <Home />
    : url_shortcode != null
      ? <App />
      : <Home />;


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
