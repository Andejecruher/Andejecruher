import React from "react";
import useStyles from "./SkillsStyle.jsx";
import { Box, Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import SkillsList from "./SkillsList.jsx";

const Skills = () => {
  const classes = useStyles();
  return (
    <Box style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5" component="div">
              Habilidades
            </Typography>
          </Stack>
          <SkillsList />
        </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
