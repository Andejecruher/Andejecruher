<script setup>
import DefaultLayoutPublic from "./components/DefaultLayoutPublic.vue";
</script>

<template>
  <DefaultLayoutPublic>
    <RouterView />
  </DefaultLayoutPublic>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
