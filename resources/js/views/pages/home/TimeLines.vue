<template>
  <div>
    <!-- Título alineado a la izquierda -->
    <v-row class="mt-3">
      <v-col cols="12" md="6" sx="12">
        <div>
          <h2 class="title ml-5 text-white">Educación</h2>
          <v-timeline side="start" align="start">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :dot-color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card>
                <v-card-title :class="['text-h6', `bg-${item.color}`]">
                  Lorem Ipsum Dolor
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <p>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </p>
                  <v-btn :color="item.color" variant="outlined"> Button </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
      <v-col cols="12" md="6" sx="12">
        <div>
          <h2 class="title ml-5 text-white">Experiencia Laboral</h2>
          <v-timeline side="start" align="start">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :dot-color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card>
                <v-card-title :class="['text-h6', `bg-${item.color}`]">
                  Lorem Ipsum Dolor
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <p>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </p>
                  <v-btn :color="item.color" variant="outlined"> Button </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: "red-lighten-2",
        icon: "mdi-star",
      },
      {
        color: "purple-lighten-2",
        icon: "mdi-book-variant",
      },
      {
        color: "green-lighten-1",
        icon: "mdi-airballoon",
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-layers-triple",
      },
    ],
  }),
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
