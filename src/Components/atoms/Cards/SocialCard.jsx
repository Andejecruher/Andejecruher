import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const SocialCard = () => {

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar alt="Profile Image" src="ruta-de-la-imagen.jpg" />
        }
      />
      <CardContent>
        <Typography variant="h5" align="center">
          Nombre
        </Typography>
        <Typography variant="subtitle1" align="center">
          Profesión
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
