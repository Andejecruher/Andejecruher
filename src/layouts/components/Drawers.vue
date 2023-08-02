<template>
  <!-- 👉 Left Drawer -->
  <VNavigationDrawer
    v-model="drawerleft"
    :permanent="!$vuetify.display.mobile"
    :temporary="$vuetify.display.mobile"
    :rail="railLeft"
    location="left"
    width="330"
    style="position: fixed;"
    @click="railLeft = false"
  >
    <template
      #prepend
      style="padding: 50px;"
    >
      <VContainer fluid>
        <VRow justify="end">
          <template v-if="railLeft">
            <!-- Icono del botón cuando el drawer está cerrado -->
            <VAppBarNavIcon
              transition="slide-x-reverse-transition"
              variant="text"
              class="text-white button-drawer"
              @click.stop="railLeft = !railLeft"
            />
          </template>
          <template v-else>
            <!-- Icono alternativo cuando el drawer está abierto -->
            <VBtn
              transition="slide-x-reverse-transition"
              icon="mdi-close"
              variant="text"
              class="text-white button-drawer"
              @click.stop="railLeft = !railLeft"
            />
          </template>
        </VRow>
        <VRow
          justify="center"
          no-gutters=""
        >
          <VCol
            v-show="!railLeft"
            cols="12"
            sm="12"
            md="12"
          >
            <DataProfile
              :nombre-prop="nombre"
              :descripcion-prop="descripcion"
              :avatar-prop="avatar"
            />
          </VCol>
        </VRow>
      </VContainer>
      <VDivider />
    </template>

    <VContainer v-show="!railLeft">
      <ResidentData
        :residencia-prop="residencia"
        :ciudad-prop="ciudad"
        :edad-prop="edad"
      />
      <VDivider />
      <Lenguajes
        :lenguajes="listaLenguajes"
        :time="200"
      />
      <VDivider />
      <Skills
        :habilidades="listaHabilidades"
        :time="200"
      />
      <VDivider />
      <Framework />
      <VDivider />
      <VRow>
        <VCol
          cols="12"
          class="text-center mt-2"
        >
          <VBtn
            variant="text"
            width="100%"
          >
            <a
              variant="text"
              width="100%"
              :href="pdfURL"
              target="_blank"
            >
              <span class="text-white">Descargar CV</span>
              <VIcon
                right
                class="text-white"
              >mdi-download</VIcon>
            </a>
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>

    <template #append>
      <!-- auth providers -->
      <VDivider />
      <VRow>
        <VCol
          cols="12"
          class="text-center"
        >
          <AuthProvider />
        </VCol>
      </VRow>
    </template>
  </VNavigationDrawer>

  <!-- 👉 Right Drawer -->
  <VNavigationDrawer
    v-model="drawer"
    :permanent="!$vuetify.display.mobile"
    :temporary="$vuetify.display.mobile"
    :rail="rail"
    location="right"
    style="position: fixed;"
    @click="rail = false"
  >
    <template #prepend>
      <VRow
        justify="left"
        style="padding: 20px;"
      >
        <template v-if="rail">
          <!-- Icono del botón cuando el drawer está cerrado -->
          <VAppBarNavIcon
            transition="slide-x-reverse-transition"
            variant="text"
            class="text-white button-drawer"
            @click.stop="rail = !rail"
          />
        </template>
        <template v-else>
          <!-- Icono alternativo cuando el drawer está abierto -->
          <VBtn
            transition="slide-x-reverse-transition"
            icon="mdi-close"
            variant="text"
            class="text-white button-drawer"
            @click.stop="rail = !rail"
          />
        </template>
      </VRow>
      <VDivider />
    </template>

    <VContainer fluid>
      <VRow
        justify="center"
        no-gutters
      >
        <VExpandXTransition>
          <VCol
            v-show="rail"
            cols="12"
            sm="12"
            md="12"
          >
            <p class="section-title">
              {{ selectedItem }}
            </p>
          </VCol>
        </VExpandXTransition>
      </VRow>
    </VContainer>

    <VContainer
      fluid
      class="content-menu"
    >
      <VRow justify="center">
        <VExpandTransition>
          <VCol
            v-show="!rail"
            cols="12"
            sm="12"
            md="12"
          >
            <VList>
              <VListItem
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                color="primary"
                rounded="xl"
                @click="selectItem(item.text)"
              >
                <template #prepend>
                  <VIcon :icon="item.icon" />
                </template>
                <VListItemTitle v-text="item.text" />
              </VListItem>
            </VList>
          </VCol>
        </VExpandTransition>
      </VRow>
    </VContainer>
  </VNavigationDrawer>
  <VAppBar
    v-if="$vuetify.display.mobile"
    elevation="2"
    style="position: fixed;"
  >
    <VAppBarNavIcon
      variant="text"
      class="text-white button-drawer"
      @click="openDrawer('left')"
    />
    <template #append>
      <VBtn
        icon="mdi-dots-vertical"
        @click="openDrawer('right')"
      />
    </template>
  </VAppBar>
</template>

<script>
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue"
import DataProfile from "./DataProfile.vue"
import Framework from "./Frameworks.vue"
import Lenguajes from "./Lenguajes.vue"
import ResidentData from "./ResidentData.vue"
import Skills from "./Skills.vue"

export default {
  components: {
    DataProfile,
    ResidentData,
    Lenguajes,
    Skills,
    Framework,
    AuthProvider,
  },
  props: {
    screenSize: Object,
  },
  data() {
    return {
      pdfURL:
        "https://drive.google.com/file/d/1wTbaGjUQh4y74WPv7cdFur_Ch2fc7nUj/view?usp=drive_link",
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
        { text: "Blog", icon: "mdi-post-outline" },
        { text: "Contacto", icon: "mdi-contacts" },
      ],
      activo: false,
      selectedItem: "Inicio",
    }
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item
      this.$router.push(item)
      setTimeout(() => {
        this.rail = !this.rail
      }, 500)
    },
    openDrawer(type) {
      switch (type) {
      case "left":
        this.drawerleft = true
        this.railLeft = !this.railLeft
        break
      case "right":
        this.drawer = true
        this.rail = !this.rail
        break
      default:
        break
      }
    },
  },
}
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
