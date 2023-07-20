<script setup>
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue';
// Components
import Footer from '@/layouts/components/Footer.vue';

</script>

<template>
  <VerticalNavLayout>
    <template #vertical-nav-content>
      
    </template>
    <!-- 👉 Pages -->
    <template #content>
      <slot />
    </template>
    
    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
