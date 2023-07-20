<script setup>
import Drawers from "./Drawers.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <!-- 👉 Drawers -->
    <Drawers />
    <!-- 👉 Content -->
    <v-main class="d-flex align-center justify-center main-content">
      <VRow style="padding: 10px 20px" class="vrow-content">
        <div class="background"></div>
        <!-- Div para el fondo con opacidad -->
        <slot />
        <!-- 👉 Footer -->
        <Footer />
      </VRow>
    </v-main>
  </v-layout>
</template>

<style lang="scss" scope>
.main-content {
  position: relative; /* Asegura que el contenido absoluto sea relativo a este contenedor */
}

.background {
  position: absolute;
  background-image: url("https://i.pinimg.com/originals/1d/c7/76/1dc7763dd69bd5813cc2e80cb14f78ff.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  block-size: 100%;
  inline-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
  min-block-size: 100vh;
  opacity: 0.1; /* Opacidad del fondo */
}
</style>
