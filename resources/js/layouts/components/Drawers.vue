<template>
  <!-- 👉 Left Drawer -->
  <v-navigation-drawer
    :permanent="!this.$vuetify.display.mobile"
    :temporary="this.$vuetify.display.mobile"
    v-model="drawerleft"
    :rail="railLeft"
    @click="railLeft = false"
    location="left"
    width="330"
    style="position: fixed"
  >
    <template v-slot:prepend style="padding: 50px">
      <v-container fluid>
        <v-row justify="end">
          <template v-if="railLeft">
            <!-- Icono del botón cuando el drawer está cerrado -->
            <v-app-bar-nav-icon
              transition="slide-x-reverse-transition"
              variant="text"
              @click.stop="railLeft = !railLeft"
              class="text-white button-drawer"
            ></v-app-bar-nav-icon>
          </template>
          <template v-else>
            <!-- Icono alternativo cuando el drawer está abierto -->
            <v-btn
              transition="slide-x-reverse-transition"
              icon="mdi-close"
              variant="text"
              @click.stop="railLeft = !railLeft"
              class="text-white button-drawer"
            ></v-btn>
          </template>
        </v-row>
        <v-row justify="center" no-gutters="">
          <v-col cols="12" sm="12" md="12" v-show="!railLeft">
            <DataProfile
              :nombreProp="nombre"
              :descripcionProp="descripcion"
              :avatarProp="avatar"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
    </template>

    <v-container v-show="!railLeft">
      <ResidentData
        :residenciaProp="residencia"
        :ciudadProp="ciudad"
        :edadProp="edad"
      />
      <v-divider></v-divider>
      <Lenguajes :lenguajes="listaLenguajes" :time="200" />
      <v-divider></v-divider>
      <Skills :habilidades="listaHabilidades" :time="200" />
      <v-divider></v-divider>
      <Framework />
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" class="text-center mt-2">
          <VBtn variant="text" width="100%">
            <span class="text-white">Descargar CV</span>
            <v-icon right class="text-white">mdi-download</v-icon>
          </VBtn>
        </v-col>
      </v-row>
    </v-container>

    <template v-slot:append>
      <!-- auth providers -->
      <v-divider></v-divider>
      <VRow>
        <VCol cols="12" class="text-center">
          <AuthProvider />
        </VCol>
      </VRow>
    </template>
  </v-navigation-drawer>

  <!-- 👉 Right Drawer -->
  <v-navigation-drawer
    :permanent="!this.$vuetify.display.mobile"
    :temporary="this.$vuetify.display.mobile"
    v-model="drawer"
    :rail="rail"
    @click="rail = false"
    location="right"
    style="position: fixed"
  >
    <template v-slot:prepend>
      <v-row justify="left" style="padding: 20px">
        <template v-if="rail">
          <!-- Icono del botón cuando el drawer está cerrado -->
          <v-app-bar-nav-icon
            transition="slide-x-reverse-transition"
            variant="text"
            @click.stop="rail = !rail"
            class="text-white button-drawer"
          ></v-app-bar-nav-icon>
        </template>
        <template v-else>
          <!-- Icono alternativo cuando el drawer está abierto -->
          <v-btn
            transition="slide-x-reverse-transition"
            icon="mdi-close"
            variant="text"
            @click.stop="rail = !rail"
            class="text-white button-drawer"
          ></v-btn>
        </template>
      </v-row>
      <v-divider></v-divider>
    </template>

    <v-container fluid>
      <v-row justify="center" no-gutters>
        <v-expand-x-transition>
          <v-col cols="12" sm="12" md="12" v-show="rail">
            <p class="section-title">{{ selectedItem }}</p>
          </v-col>
        </v-expand-x-transition>
      </v-row>
    </v-container>

    <v-container fluid class="content-menu">
      <v-row justify="center">
        <v-expand-transition>
          <v-col cols="12" sm="12" md="12" v-show="!rail">
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                color="primary"
                rounded="xl"
                @click="selectItem(item.text)"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-expand-transition>
      </v-row>
    </v-container>
  </v-navigation-drawer>
  <v-app-bar
    elevation="2"
    style="position: fixed"
    v-if="this.$vuetify.display.mobile"
  >
    <v-app-bar-nav-icon
      variant="text"
      @click="openDrawer('left')"
      class="text-white button-drawer"
    ></v-app-bar-nav-icon>
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical" @click="openDrawer('right')"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import DataProfile from "./DataProfile.vue";
import ResidentData from "./ResidentData.vue";
import Lenguajes from "./Lenguajes.vue";
import Skills from "./Skills.vue";
import Framework from "./Frameworks.vue";

export default {
  props: {
    screenSize: Object,
  },
  components: {
    DataProfile,
    ResidentData,
    Lenguajes,
    Skills,
    Framework,
    AuthProvider,
  },
  data() {
    return {
      drawer: true,
      drawerleft: true,
      rail: true,
      railLeft: false,
      nombre: "Antonio Cruz Hernandez",
      descripcion: "Full Stack Developer",
      avatar:
        "https://pbs.twimg.com/profile_images/1670867856810967048/p17zPWeY_400x400.jpg",
      residencia: "México",
      ciudad: "Puerto Vallarta",
      edad: 28,
      listaLenguajes: [
        { nombre: "Español", porcentaje: 100 },
        { nombre: "Inglés", porcentaje: 30 },
      ],
      listaHabilidades: [
        { nombre: "HTML5", porcentaje: 100 },
        { nombre: "CSS3", porcentaje: 100 },
        { nombre: "JavaScript", porcentaje: 100 },
        { nombre: "PHP", porcentaje: 100 },
        { nombre: "C#", porcentaje: 100 },
        { nombre: "MySql", porcentaje: 100 },
        // Puedes agregar más habilidades aquí
      ],
      items: [
        { text: "Inicio", icon: "mdi-home" },
        { text: "Portafolio", icon: "mdi-briefcase" },
        { text: "Blog", icon: "mdi-post-outline" },
        { text: "Contact", icon: "mdi-contacts" },
      ],
      activo: false,
      selectedItem: "Inicio",
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      setTimeout(() => {
        this.rail = !this.rail;
      }, 500);
    },
    openDrawer(type) {
      switch (type) {
        case "left":
          this.drawerleft = true;
          this.railLeft = !this.railLeft;
          break;
        case "right":
          this.drawer = true;
          this.rail = !this.rail;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    console.log(this.$vuetify.display.mobile);
  },
};
</script>

<style scope>
.section-title {
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  rotate: 90deg;
}

.content-menu {
  font-size: 1.2rem;
  margin-block-start: 100%;
}

/* Cambiar el estilo del scroll vertical */
.v-navigation-drawer__content::-webkit-scrollbar {
  inline-size: 10px; /* Grosor del scroll */
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  border-radius: 5px; /* Bordes redondeados */
  background-color: none; /* Color del thumb (el "botón" del scroll) */
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb:hover {
  background-color: #696cff; /* Color del thumb cuando se pasa el cursor sobre él */
}

.v-navigation-drawer__content::-webkit-scrollbar-track {
  border-radius: 5px; /* Bordes redondeados */
  background-color: none;
}

.rotated-text {
  transform: rotate(90deg); /* Aplicamos la rotación de 90 grados */
}
</style>
