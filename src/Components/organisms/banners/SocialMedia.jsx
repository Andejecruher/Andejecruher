import './style.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button } from '@mui/material';


function ProfileCard(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <Box>
        <div>
            <p>Aqui va el contenido</p>
        </div>
      </Box>
    </Grid>
  );
}

export default ProfileCard;
