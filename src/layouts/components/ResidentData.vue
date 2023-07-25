<template>
  <v-card elevation="0" class="mt-0">
    <v-card-text>
      <v-row no-gutters>
        <v-col cols="6">
          <strong class="text-left text-profile-title">Residencia:</strong>
        </v-col>
        <v-col cols="6" class="text-right text-profile-subtitle">
          {{ residenciaProp }}
        </v-col>
      </v-row>
      <v-row class="mb-0 mt-0">
        <v-col cols="6" class="mb-0 mt-0">
          <strong class="text-left text-profile-title">Ciudad:</strong>
        </v-col>
        <v-col cols="6" class="text-right text-profile-subtitle">
          {{ ciudadProp }}
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="6">
          <strong class="text-left text-profile-title">Edad:</strong>
        </v-col>
        <v-col cols="6" class="text-right text-profile-subtitle">{{
          edadProp
        }}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    residenciaProp: String,
    ciudadProp: String,
    edadProp: Number,
  },
};
</script>

<style>
.text-profile-title {
  font-family: monospace, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
