<template>
  <v-card class="mx-auto">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-item>
      <v-card-title>
        <v-row>
          <v-col cols="12" md="6" xs="6">
            <span class="text-h6">{{ title }}</span>

            <v-icon
              color="error"
              icon="mdi-circle-medium"
              size="small"
            ></v-icon>
          </v-col>
          <v-col cols="12" md="6" xs="6">
            <div class="dateChip">
              <v-chip-group>
                <v-chip>{{ date }}</v-chip>
              </v-chip-group>
            </div>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ subname }}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div>
        {{ description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions class="contact-button-container">
      <v-btn color="primary" variant="outlined"> {{ titleBtn }} </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.dateChip {
  display: flex;
  justify-content: flex-end;
}

/* Estilos para el botón de contacto */
.contact-button-container {
  display: flex;
  justify-content: flex-end;
  margin-block-start: 16px;
}
</style>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    titleBtn: {
      type: String,
      required: true,
    },
  },
};
</script>
