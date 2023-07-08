import React from "react";
import { Box } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
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
        <Grid
          item
          xs
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
              width={250}
              height={250}
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
          <Typography variant="h5" align="center"> Nombre </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem>
          *
        </Divider>
        <Grid item xs>
          {content}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
