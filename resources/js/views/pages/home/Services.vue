<template>
  <div>
    <!-- Título alineado a la izquierda -->
    <h2 class="title ml-5 text-white">{{ title }}</h2>

    <!-- Cards con los servicios -->
    <v-row>
      <v-col v-for="(service, index) in services" :key="index" cols="4" xs="12">
        <v-card class="mx-auto" max-width="500">
          <v-card-subtitle class="pt-4">
            <h3 class="subtitle">{{ service.title }}</h3>
          </v-card-subtitle>

          <v-card-text>
            <p class="description">{{ service.description }}</p>
          </v-card-text>

          <!-- Estilos para alinear el botón de contacto a la derecha -->
          <v-card-actions class="contact-button-container">
            <v-btn variant="outlined" color="primary">Contacto</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    services: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.title {
  font-size: 24px;
  margin-block-end: 16px;
  text-align: start;
}

.card {
  margin-block-end: 16px;
}

.column-content {
  padding: 16px;
  background-color: #f0f0f0;
  text-align: center;
}

.subtitle {
  font-size: 20px;
}

.description {
  font-size: 16px;
}

/* Estilos para el botón de contacto */
.contact-button-container {
  display: flex;
  justify-content: flex-end;
  margin-block-start: 16px;
}
</style>
