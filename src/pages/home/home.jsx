import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SwipeableTextMobileStepper from '../../Components/organisms/banners/banner.jsx';
import AboutUs from '../../Components/atoms/Cards/AboutUs.jsx';
import Box from '@mui/material/Box';

function Home() {
  return (
    <Grid item xs={12} md={12}>
      <SwipeableTextMobileStepper />
      <Container maxWidth="lg">
      <AboutUs />
      </ Container>
    </Grid>
  );
}

export default Home;
