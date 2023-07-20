<script setup>
import { useTheme } from "vuetify";

const { global } = useTheme();

const authProviders = [
  {
    icon: "bxl-facebook",
    color: "#4267b2",
    colorInDark: "#4267b2",
    url: "https://www.facebook.com/andejecruher/", // URL para redireccionar al hacer clic en el icono de Facebook
  },
  {
    icon: "bxl-linkedin",
    color: "#1da1f2",
    colorInDark: "#1da1f2",
    url: "https://www.linkedin.com/in/antonio-de-jesus-cruz-hernandez-2535748b/", // URL para redireccionar al hacer clic en el icono de Twitter
  },
  {
    icon: "bxl-github",
    color: "#272727",
    colorInDark: "#fff",
    url: "https://github.com/Andejecruher", // URL para redireccionar al hacer clic en el icono de GitHub
  },
  {
    icon: "bxl-instagram",
    color: "#db4437",
    colorInDark: "#db4437",
    url: "https://www.instagram.com/andejecruher/", // URL para redireccionar al hacer clic en el icono de Google
  },
];
</script>

<template>
  <VBtn
    v-for="link in authProviders"
    :key="link.icon"
    :icon="link.icon"
    variant="text"
    :color="global.name.value === 'dark' ? link.colorInDark : link.color"
  >
    <a
      :href="link.url"
      target="_blank"
      :color="global.name.value === 'dark' ? link.colorInDark : link.color"
    >
      <v-icon
        :color="global.name.value === 'dark' ? link.colorInDark : link.color"
        >{{ link.icon }}</v-icon
      >
    </a>
  </VBtn>
</template>

<script>
export default {
  methods: {},
};
</script>
