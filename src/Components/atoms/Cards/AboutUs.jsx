import React from "react";
import { Box, Avatar } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "silver",
    borderRadius: "10px",
    padding: theme.spacing(2),
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "lightgray",
    },
  },
}));

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );
  return (
    <Box className={classes.box}>
      <Grid container>
        <Grid item xs>
          <Stack spacing={2} justifyContent={'center'}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Box>
    
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem>
          Sobre Mi
        </Divider>
        <Grid item xs>
          {content}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
