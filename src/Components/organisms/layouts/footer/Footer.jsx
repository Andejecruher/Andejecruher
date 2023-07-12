import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sobre Mi :
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Desarrollador Full Stack altamente competente con experiencia en la creación y mantenimiento de aplicaciones web.            
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: andejecruher@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +52 322-301-85-70
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sigueme !
            </Typography>
            <Link href="https://www.facebook.com/andejecruher" color="inherit" sx={{ color: "#1877F2" }}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/andejecruher/"
              sx={{ pl: 1, pr: 1, color: "#E4405F"  }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.linkedin.com/in/antonio-de-jesus-cruz-hernandez-2535748b/" color="inherit" sx={{ color: "#2867B2" }}>
              <LinkedInIcon />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://www.linkedin.com/in/antonio-de-jesus-cruz-hernandez-2535748b/">
              Andejecruher
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}