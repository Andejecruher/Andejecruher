import React from "react";
import { Box, Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import SkillsList from "./SkillsList.jsx";

const Skills = () => {
  return (
    <Box style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <SkillsList />
        </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
