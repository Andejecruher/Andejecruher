<template>
  <VCard class="mx-auto mt-3 card" elevation="2" outlined tile>
    <v-row class="mt-3">
      <v-col
        v-for="(statistic, index) in statistics"
        :key="index"
        cols="12"
        md="4"
        sx="12"
      >
        <div class="stat">
          <div class="stat-number" :ref="`stat${index}`">
            {{ statistic.porcentaje }}
          </div>
          <div class="stat-label">{{ statistic.nombre }}</div>
        </div>
      </v-col>
    </v-row>
  </VCard>
</template>

<script>
export default {
  props: {
    statistics: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // Función para realizar la suma progresiva en el valor lenguaje.porcentaje
    startSum(statistics) {
      // Calculamos el número de iteraciones necesarias
      let step = 0;
      const totalIterations = Math.ceil(statistics.porcentaje / 1);

      // Creamos una función auxiliar para simular la suma progresiva
      const simulateSum = (currentValue) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            // Actualizamos el valor de statistics.porcentajeProgress en 10 unidades
            statistics.porcentaje = currentValue + 1;
            resolve();
          }, 10);
        });
      };

      const simulateRes = (currentValue) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            // Actualizamos el valor de statistics.porcentajeProgress en 10 unidades
            statistics.porcentaje = currentValue - 1;
            resolve();
          }, 10);
        });
      };

      // Iteramos hasta que alcancemos el valor objetivo
      let currentValue = 0;
      let iteration = 0;
      const iterate = () => {
        if (iteration < 100 && step == 0) {
          simulateSum(currentValue).then(() => {
            currentValue += 1;
            iteration++;
            iterate();
          });
        } else {
          step = 1;
          if (iteration > totalIterations) {
            simulateRes(currentValue).then(() => {
              currentValue -= 1;
              iteration--;
              iterate();
            });
          }
        }
      };

      // Iniciamos el proceso de suma progresiva
      iterate();
    },
  },
  mounted() {
    // Iniciamos la suma progresiva para cada lenguaje recibido en la prop lenguajes
    this.statistics.forEach((statistics) => {
      this.startSum(statistics);
    });
  },
};
</script>

<style scope>
.stat {
  margin-block-end: 16px;
  text-align: center;
}

.stat-number {
  color: #696cff;
  font-size: 24px;
  font-weight: bold;
}

.stat-label {
  font-size: 16px;
}

.card {
  background-color: rgba(33, 34, 50, 90%);
  color: #fff;
}
</style>
