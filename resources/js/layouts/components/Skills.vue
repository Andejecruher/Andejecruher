<template>
  <div class="skills-content">
    <v-row v-for="(habilidad, index) in habilidades" :key="index" class="mt-0">
      <v-col class="mb-0 mt-0" cols="1">
        <strong class="text-left text-profile-title">{{
          habilidad.nombre
        }}</strong>
      </v-col>
      <v-col cols="11" class="text-right text-profile-subtitle mb-0 mt-0">
        {{ habilidad.porcentaje }}%
      </v-col>
      <v-col class="mb-0 mt-0" cols="12">
        <v-progress-linear
          color="primary"
          :model-value="habilidad.porcentaje"
          :height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    habilidades: {
      type: Array,
      required: true,
    },
    time: {
      type: Number,
      default: 200,
    },
  },
  methods: {
    // Función para realizar la suma progresiva en el valor lenguaje.porcentaje
    startSum(habilidades) {
      // Calculamos el número de iteraciones necesarias
      const totalIterations = Math.ceil(habilidades.porcentaje / 10);

      // Creamos una función auxiliar para simular la suma progresiva
      const simulateSum = (currentValue) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            // Actualizamos el valor de habilidades.porcentajeProgress en 10 unidades
            habilidades.porcentaje = currentValue + 10;
            resolve();
          }, this.time);
        });
      };

      // Iteramos hasta que alcancemos el valor objetivo
      let currentValue = 0;
      let iteration = 0;
      const iterate = () => {
        if (iteration < totalIterations) {
          simulateSum(currentValue).then(() => {
            currentValue += 10;
            iteration++;
            iterate();
          });
        }
      };

      // Iniciamos el proceso de suma progresiva
      iterate();
    },
  },
  mounted() {
    // Iniciamos la suma progresiva para cada lenguaje recibido en la prop lenguajes
    this.habilidades.forEach((habilidades) => {
      this.startSum(habilidades);
    });
  },
};
</script>

<style>
.skills-content {
  margin-block: 20px;
  margin-block-end: 20px;
  margin-inline: 0;
}
</style>
