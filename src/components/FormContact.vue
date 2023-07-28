<template>
  <VRow class="mt-3">
    <VCol
      cols="12"
      md="12"
      sx="12"
    >
      <div>
        <VCard
          class="mx-auto"
          max-width="100%"
        >
          <VCardTitle class="headline">
            Formulario de Contacto
          </VCardTitle>
          <VCardText>
            <p>
              Si deseas contactarme, puedes enviarme un mensaje a través de este formulario.
            </p>
          </VCardText>
          <VCardText>
            <VForm @submit.prevent="submitForm">
              <VTextField
                v-model="nombre"
                label="Nombre"
                required
                class="mt-3"
              />
              <VTextField
                v-model="correo"
                label="Correo Electrónico"
                required
                class="mt-3"
              />
              <VTextarea
                v-model="mensaje"
                label="Mensaje"
                required
                class="mt-3"
              />
              <div class="contact-button-container">
                <VBtn
                  color="primary"
                  type="submit"
                  class="mt-2"
                >
                  Enviar Mensaje
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
      nombre: "",
      correo: "",
      mensaje: "",
    }
  },
  methods: {
    submitForm() {
      // Aquí puedes implementar la lógica para enviar el mensaje, por ejemplo, enviar los datos al servidor o mostrar un mensaje de éxito.
      console.log("Nombre:", this.nombre)
      console.log("Correo Electrónico:", this.correo)
      console.log("Mensaje:", this.mensaje)

      // Limpia los campos del formulario después de enviar
      this.nombre = ""
      this.correo = ""
      this.mensaje = ""
    },
  },
}
</script>

<style>
/* Estilos adicionales para personalizar la card o el formulario si lo deseas */
</style>
