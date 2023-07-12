import React from "react";
import { Box, Paper } from "@material-ui/core";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import useStyles from "./AboutUsStyle.jsx";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "typewriter-effect";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#FFFFFF",
  backgroundColor: "lightgray",
  width: "auto",
  height: "auto",
  borderRadius: "250px",
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              spacing={2}
              justifyContent="center"
              alignItems="center"
              color={"#000"}
            >
              <Item>
                <Avatar
                  className={classes.imgHover}
                  alt="Remy Sharp"
                  src="https://pbs.twimg.com/profile_images/1670867856810967048/p17zPWeY_400x400.jpg"
                  sx={{ width: 190, height: 190 }}
                />
              </Item>
              <Typography variant="h7" component="p">
                <Typewriter
                  options={{
                    strings: ["Antonio De Jesus Cruz Hernandez"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
              <Typography variant="h8" component="div">
                Full Stack Developer
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/andejecruher"
                  color="primary"
                  sx={{ color: "#1877F2" }}
                  target="_blank"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/andejecruher/"
                  color="primary"
                  sx={{ color: "#E4405F" }}
                  target="_blank"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/antonio-de-jesus-cruz-hernandez-2535748b/"
                  color="primary"
                  sx={{ color: "#2867B2" }}
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h5"
              component="div"
              align="left"
              sx={{ fontWeight: "bold", color: "#000", p: 2, pt: 3 }}
            >
              Sobre Mi ...
            </Typography>
            <Typography variant="h9" component="div" align="justify" sx={{ p: 2 }}>
              Desarrollador Full Stack altamente competente con experiencia en
              la creación y mantenimiento de aplicaciones web.
              Poseo conocimientos tanto en el desarrollo del lado del cliente
              como del lado del servidor, así como en la implementación de bases
              de datos. Soy capaz de trabajar de manera independiente o en
              equipo y tengo habilidades sólidas para la resolución de
              problemas y la toma de decisiones.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
