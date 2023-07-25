<template>
  <div class="lenguaje-content">
    <v-row>
      <v-col v-for="(lenguaje, index) in lenguajes" :key="index" cols="6">
        <div class="progress-container">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="5"
                :model-value="lenguaje.porcentaje"
                color="primary"
                v-bind="attrs"
                v-on="on"
              >
                <span class="label text-white text-profile-title">{{
                  lenguaje.porcentaje
                }}</span>
              </v-progress-circular>
              <span class="label text-white text-profile-title">{{
                lenguaje.nombre
              }}</span>
            </template>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    lenguajes: {
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
    startSum(lenguaje) {
      // Calculamos el número de iteraciones necesarias
      const totalIterations = Math.ceil(lenguaje.porcentaje / 10);

      // Creamos una función auxiliar para simular la suma progresiva
      const simulateSum = (currentValue) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            // Actualizamos el valor de lenguaje.porcentajeProgress en 10 unidades
            lenguaje.porcentaje = currentValue + 10;
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
    this.lenguajes.forEach((lenguaje) => {
      this.startSum(lenguaje);
    });
  },
};
</script>

<style>
.lenguaje-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-block: 10px;
  margin-block-end: 10px;
  margin-inline: 0;
}
</style>
