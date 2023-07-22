<template>
  <v-row class="mt-3">
    <v-col cols="12" md="12" sx="12">
      <div>
        <v-card class="mx-auto" max-width="100%">
          <v-card-title class="headline">Formulario de Contacto</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="nombre"
                label="Nombre"
                required
                class="mt-3"
              ></v-text-field>
              <v-text-field
                v-model="correo"
                label="Correo Electrónico"
                required
                class="mt-3"
              ></v-text-field>
              <v-textarea
                v-model="mensaje"
                label="Mensaje"
                required
                class="mt-3"
              ></v-textarea>
              <div class="contact-button-container">
                <v-btn color="primary" type="submit" class="mt-2"
                  >Enviar Mensaje</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      correo: "",
      mensaje: "",
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes implementar la lógica para enviar el mensaje, por ejemplo, enviar los datos al servidor o mostrar un mensaje de éxito.
      console.log("Nombre:", this.nombre);
      console.log("Correo Electrónico:", this.correo);
      console.log("Mensaje:", this.mensaje);

      // Limpia los campos del formulario después de enviar
      this.nombre = "";
      this.correo = "";
      this.mensaje = "";
    },
  },
};
</script>

<style>
/* Estilos adicionales para personalizar la card o el formulario si lo deseas */
</style>
