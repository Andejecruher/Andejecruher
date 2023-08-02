<template>
  <VCard
    class="image-card"
    @click="showFullscreen = true"
  >
    <VImg
      :src="imageUrl"
      aspect-ratio="1"
      class="image"
    />
    <VBtn
      icon
      class="fullscreen-button"
      @click.stop="showFullscreen = true"
    >
      <VIcon>mdi-fullscreen</VIcon>
    </VBtn>

    <!-- Pantalla completa modal -->
    <VDialog
      v-model="showFullscreen"
      max-width="xl"
    >
      <VCard>
        <VCardTitle class="text-h6">
          <span>{{ title }}</span>
          <VSpacer />
          <VBtn
            icon
            @click="showFullscreen = false"
          >
            <VIcon>mdi-close</VIcon>
          </VBtn>
        </VCardTitle>
        <VCardText>
          <VImg
            :src="imageUrl"
            contain
          />
        </VCardText>
      </VCard>
    </VDialog>
  </VCard>
</template>

<style scope>
.zoom-on-hover {
  transition: transform 0.3s; /* Transición para el efecto de aumento */
}

.zoom-on-hover:hover {
  transform: scale(1.1); /* Aumentar la imagen al hacer hover */
}

.pagination {
  position: relative;
  background: #2b2c40;
}
</style>
