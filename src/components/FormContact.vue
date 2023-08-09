<template>
  <VRow class="mt-3">
    <VCol cols="12" md="12" sx="12">
      <div>
        <VCard class="mx-auto" max-width="100%">
          <VCardTitle class="headline"> Formulario de Contacto </VCardTitle>
          <VCardText>
            <p>
              Si deseas contactarme, puedes enviarme un mensaje a través de este
              formulario.
            </p>
          </VCardText>
          <VCardText>
            <VForm @submit.prevent="submitForm">
              <VTextField
                v-model="nombre"
                label="Nombre"
                required
                :error-messages="nombreErrors"
                class="mt-3"
              />
              <VTextField
                v-model="correo"
                label="Correo Electrónico"
                required
                :rules="correoRules"
                :error-messages="correoErrors"
                class="mt-3"
              />
              <VTextarea
                v-model="mensaje"
                label="Mensaje"
                required
                :error-messages="mensajeErrors"
                class="mt-3"
              />
              <div class="contact-button-container">
                <VBtn
                  color="primary"
                  type="submit"
                  class="mt-2"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? "Enviando..." : "Enviar Mensaje" }}
                </VBtn>
              </div>
            </VForm>
          </VCardText>
        </VCard>
      </div>
    </VCol>
  </VRow>
</template>

<script>
export default {
  data() {
    return {
      isSubmitting: false,
      nombre: "",
      correo: "",
      mensaje: "",
      nombreErrors: [],
      correoErrors: [],
      mensajeErrors: [],
    };
  },
  computed: {
    correoRules() {
      return [
        (v) => !!v || "El correo electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo electrónico debe ser válido",
      ];
    },
  },
  methods: {
    async submitForm() {
      // Use sweetalert2
      try {
        this.isSubmitting = true;
        // Realizar la petición a la API para enviar el mensaje
        await this.$axios.post("/enviar-mensaje", {
          nombre: this.nombre,
          correo: this.correo,
          mensaje: this.mensaje,
        });

        // Mostrar un mensaje de error usando toast
        this.$swal({
          icon: "success",
          title: "Mensaje enviado",
          text: "El mensaje se ha enviado correctamente !",
        });

        // Limpia los campos del formulario después de enviar
        this.nombre = "";
        this.correo = "";
        this.mensaje = "";
        this.nombreErrors = [];
        this.correoErrors = [];
        this.mensajeErrors = [];
        this.isSubmitting = false;
      } catch (error) {
        // Mostrar un mensaje de error usando toast
        this.$swal({
          icon: "error",
          title: "Mensaje no enviado",
          text: "El mensaje no se pudo enviar intenta de nuevo !",
        });

        // Capturar errores de validación si existen en la respuesta
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const errors = error.response.data.errors;
          this.nombreErrors = errors.nombre || [];
          this.correoErrors = errors.correo || [];
          this.mensajeErrors = errors.mensaje || [];
        }
        this.isSubmitting = false;
      }
    },
  },
};
</script>
