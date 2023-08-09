/* eslint-disable import/order */
import "@/@iconify/icons-bundle";
import App from "@/App.vue";
import http from "@/plugins/axios/index";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import "@core/scss/template/index.scss";
import "@layouts/styles/index.scss";
import "@styles/styles.scss";
import { createPinia } from "pinia";
import "sweetalert2/dist/sweetalert2.min.css";
import { createApp } from "vue";
import VueSweetalert2 from "vue-sweetalert2";

loadFonts();

setTimeout(() => {
  // Create vue app
  const app = createApp(App);
  // Mount global properties
  app.config.globalProperties.$axios = http;

  // Use plugins
  app.use(vuetify);
  app.use(createPinia());
  app.use(router);
  app.use(VueSweetalert2);
  // Mount vue app
  app.mount("#app");
}, 1000);
