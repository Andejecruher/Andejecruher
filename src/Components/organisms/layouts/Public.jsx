import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './footer/Footer.jsx';
import ResponsiveAppBar from './header/AppBar.jsx';
import { Outlet } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#6246ea',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Monospace, sans-serif',
    // Ajusta aquí los estilos de tipografía según tus necesidades
  },
});

export default function PublicLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <main style={{ marginTop: '64px'}}>
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}