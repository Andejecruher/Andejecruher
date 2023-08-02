<!-- eslint-disable vue/component-api-style -->
<!-- eslint-disable vue/no-restricted-class -->
<script setup>
import pages6 from '@images/pages/6.jpg'

</script>

<template>
  <!-- 👉 Transactions -->
  <VCol
    cols="12"
    md="12"
    sm="12"
    order="3"
  >
    <VRow>
      <VCol
        cols="12"
        md="8"
      >
        <VCardItem>
          <h2>Titulo de el post</h2>
        </VCardItem>
      </VCol>
      <VCol
        cols="12"
        md="4"
      >
        <VCardItem>
          <VChip>
            <span>
              <VIcon icon="mdi-calendar" />
              12-12-2020
            </span>
            <span class="ml-2">
              /
            </span>

            <span class="ml-2">
              <VIcon icon="mdi-tag" />
              Categoria
            </span>
          </VChip>
        </VCardItem>
      </VCol>
    </VRow>
    <VRow>
      <VCol
        cols="12"
        md="12"
      >
        <VCard>
          <VImg
            class="zoom-on-hover"
            cover
            height="550"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            @click="showFullscreen = true"
          />
        </VCard>

        <!--     completa modal -->
        <VDialog
          v-model="showFullscreen"
          max-width="xl"
        >
          <VCard>
            <VCardTitle class="text-h6">
              <VSpacer />
              <VBtn
                variant="outlined"
                icon
                @click="showFullscreen = false"
              >
                <VIcon>mdi-close</VIcon>
              </VBtn>
            </VCardTitle>
            <VCardText>
              <VImg
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                contain
              />
            </VCardText>
          </VCard>
        </VDialog>
      </VCol>

      <VCol>
        <VCard>
          <div class="content"> 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, veritatis veniam temporibus, impedit voluptates assumenda corporis nihil rerum nemo itaque dignissimos, magnam ullam quibusdam sunt earum laborum nulla obcaecati! Voluptatum?</p>
          </div>
          <div class="footerPost">
            <ul>
              <li>Posteado en <span color="yellow"> Frontend </span> Por <span color="yellow">Andejecruher</span></li>
            </ul>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </VCol>
</template>

<script>
export default {
  data() {
    return {
      showFullscreen: false,
    }
  },
}
</script>

<style scope>
.image-card {
  position: relative;
}

.image {
  cursor: pointer;
  transition: transform 0.2s;
}

.image:hover {
  transform: scale(1.1);
}

.fullscreen-button {
  position: absolute;
  background-color: rgba(0, 0, 0, 50%);
  color: white;
  inset-block-start: 8px;
  inset-inline-end: 8px;
}

.fullscreen-button:hover {
  background-color: rgba(0, 0, 0, 70%);
}

.v-dialog {
  z-index: 9999; /* Asegurar que el modal se muestre por encima de otros elementos */
}

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

