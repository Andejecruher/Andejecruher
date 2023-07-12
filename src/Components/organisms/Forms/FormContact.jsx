import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario de contacto
  };
  return (
    <Box style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Formulario de Contacto
              </Typography>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <TextField label="Nombre" fullWidth required />
                <TextField label="Email" type="email" fullWidth required />
                <TextField
                  label="Mensaje"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ alignSelf: "flex-end", marginTop: "10px" }}
                >
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
