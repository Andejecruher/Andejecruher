import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SwipeableTextMobileStepper from '../../Components/organisms/banners/banner.jsx';
import AboutUs from '../../Components/atoms/Cards/AboutUs/AboutUs.jsx';
import Experience from '../../Components/atoms/Cards/Experience/Experience.jsx';
import Skills from '../../Components/atoms/Cards/Skills/Skills.jsx';
import ContactForm from '../../Components/organisms/Forms/FormContact.jsx'

function Home() {
  return (
    <Grid item xs={12} md={12}>
      <SwipeableTextMobileStepper />
      <Container maxWidth="lg" style={{ marginTop: '50px' }}>
        <AboutUs />
        <Experience />
        <Skills />
        <ContactForm />
      </ Container>
    </Grid>
  );
}

export default Home;
