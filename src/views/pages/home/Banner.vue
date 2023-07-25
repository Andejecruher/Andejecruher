<script setup>
// Importar los componentes necesarios si es necesario
</script>

<template>
  <VCard class="mx-auto" elevation="2" outlined tile>
    <div class="image-container">
      <!-- Pseudo-elemento para aplicar opacidad solo al fondo de la imagen -->
      <v-img
        class="align-end text-white"
        height="500"
        src="https://i.pinimg.com/originals/1d/c7/76/1dc7763dd69bd5813cc2e80cb14f78ff.jpg"
        cover
        style="opacity: 0.2"
      ></v-img>
      <!-- Contenido -->
      <div class="content">
        <v-row>
          <v-col cols="12" md="8" xs="12">
            <div class="text-content">
              <v-card-title class="text-monospace text-h"
                >Descubre mi asombroso ¡Espacio de arte!
              </v-card-title>
              <v-card-subtitle class="text-d mt-4">
                <p class="code-line">
                  <span class="primary-icon"
                    >&lt;<i style="color: yellow"> code </i>&gt;</span
                  ><VueWriter
                    :array="[
                      'Frontend Developer',
                      'Backend Developer',
                      'Full Stack Developer',
                    ]"
                  />
                  <span class="primary-icon"
                    >&lt;<i style="color: yellow"> code </i>/&gt;</span
                  >
                </p>
              </v-card-subtitle>
              <!-- <v-card-actions class="mt-5">
                <VBtn class="ms-2" variant="tonal" size="large">
                  EXPLORE NOW
                </VBtn>
              </v-card-actions> -->
            </div>
          </v-col>
          <v-col cols="12" md="4" xs="12">
            <v-avatar size="300" rounded="0" class="avatar-banner">
              <v-img
                src="https://i.postimg.cc/637HJNFM/andejecruher-removebg-preview.png"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </div>
    </div>
  </VCard>
</template>
<script>
import VueWriter from "vue-writer";
export default {
  components: { VueWriter },
};
</script>
<style lang="scss" scoped>
.image-container {
  position: relative;
  block-size: 500px;
}

.image-container::before {
  position: absolute;
  background-color: rgba(0, 0, 0, 40%); /* Opacidad del fondo */
  content: "";
  inset: 0;
}

.content {
  position: absolute;
  display: flex;
  align-items: center;
  color: white;
  inset: 0;
}

.text-h {
  font-family: monospace, sans-serif;
  font-size: 3.125rem !important;
  font-weight: 400;
  text-transform: none !important;
  white-space: normal; /* Permite que el texto no ignore los espacios en blanco y se ajuste al contenedor */

  /* Ajuste del texto */
  word-wrap: break-word; /* Permite que el texto se divida en varias líneas si es necesario */
}

.text-d {
  font-family: monospace, sans-serif;
  font-size: 1.125rem !important;
  text-transform: none !important;
  white-space: normal; /* Permite que el texto no ignore los espacios en blanco y se ajuste al contenedor *
  /* Ajuste del texto */
  word-wrap: break-word; /* Permite que el texto se divida en varias líneas si es necesario */
}

.text-monospace {
  font-family: monospace, sans-serif;
}

.text-content {
  display: flex;
  flex: 1; /* Para que ocupe todo el espacio disponible */
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; /* Espacio entre la imagen y el texto */
  white-space: normal; /* Permite que el texto no ignore los espacios en blanco y se ajuste al contenedor */

  /* Ajuste del texto */
  word-wrap: break-word; /* Permite que el texto se divida en varias líneas si es necesario */
}

.code-line {
  display: flex;
  align-items: center;
}

.primary-icon {
  color: #007bff; /* Color primario, ajusta según tu paleta de colores */
  font-size: 1.2em; /* Ajusta el tamaño del ícono según sea necesario */
  margin-inline-end: 5px; /* Espacio entre el ícono y el texto del código */
}

/* Estilos adicionales para el ícono del código */
.primary-icon i {
  font-style: normal; /* Asegura que el texto del ícono no sea cursiva */
}

/* Estilos para pantallas 768px o menos */
@media (max-width: 768px) {
  .text-content {
    text-align: center;
  }

  .text-d {
    margin-inline-start: 10%;
  }

  .text-h {
    font-size: 2.5rem !important;
    margin-block-start: 10%;
  }

  .avatar-banner {
    inline-size: 100% !important;
    inline-size: 200px;
    inset-block-start: 18%;
  }
}

/* Estilos para pantallas 768px o menos */
@media (max-width: 425px) {
  .text-content {
    text-align: center;
  }

  .text-d {
    font-size: 0.8rem !important;
    margin-inline-start: 0%;
  }

  .text-h {
    font-size: 1.5rem !important;
    margin-block-start: 25%;
  }

  .avatar-banner {
    inline-size: 100% !important;
    inline-size: 150px;
    inset-block-start: 20%;
  }
}
</style>
