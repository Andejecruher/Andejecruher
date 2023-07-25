<template>
  <v-card elevation="0" class="text-center">
    <v-avatar color="grey" size="110" rounded="60">
      <v-img cover :src="avatarProp"></v-img>
    </v-avatar>
    <v-badge
      bordered
      floating
      color="primary"
      offset-y="30"
      offset-x="12"
      transition="scale-rotate-transition"
      class="badge-scale"
    >
      <template v-slot:badge>
        <v-icon size="x-large">mdi-code</v-icon>
      </template>
    </v-badge>
    <v-list-item-content>
      <v-list-item-title class="text-white">
        {{ nombreProp }}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ descripcionProp }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-card>
</template>

<script>
export default {
  props: {
    nombreProp: String,
    descripcionProp: String,
    avatarProp: String,
  },
};
</script>

<style>
.v-progress-circular {
  margin: 1rem;
}

.badge-scale {
  position: relative;
  display: inline-block;
  transform: scale(1);
  transition: transform 0.3s;
}

.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  margin-block-start: 0;
  text-align: center;
}

.text-profile-title {
  font-family: monospace, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
}

.text-profile-subtitle {
  font-family: monospace, sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
}

@keyframes intermitente {
  0% {
    transform: scale(1.5);
  }

  50% {
    opacity: 1;
    transform: scale(1.6);
  }

  100% {
    opacity: 1;
    transform: scale(1.5);
  }
}

.badge-scale {
  animation: intermitente 2s infinite;
}
</style>
