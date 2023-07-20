<template>
  <!-- 👉 Transactions -->
  <VCol cols="12" md="12" sm="12" order="3">
    <Banner />
    <History :statistics="statistics" :time="200" />
    <Services :title="title" :services="services" />
    <TimeLine />
  </VCol>
</template>

<script>
import Banner from "./Banner.vue";
import History from "./History.vue";
import Services from "./Services.vue";
import TimeLine from "./TimeLines.vue";

export default {
  components: {
    Banner,
    History,
    Services,
    TimeLine,
  },
  data() {
    return {
      title: "Mis Servicios",
      services: [
        {
          title: "Frontend Developer",
          description:
            "Diseñaré interfaces cautivadoras y responsivas que cautivarán a tus usuarios desde el primer instante. Utilizando tecnologías modernas y las mejores prácticas, crearé experiencias visuales sorprendentes y funcionales que dejarán una impresión duradera.",
        },
        {
          title: "Backend Developer",
          description:
            "Gestionaré la lógica del servidor y la gestión de datos con precisión y eficiencia. Con mi experiencia en desarrollo de backend, garantizaré un rendimiento excepcional, seguridad robusta y una integración perfecta entre el frontend y el backend de tu sitio web.",
        },
        {
          title: "Full Stack Developer",
          description:
            "Como experto en el desarrollo web de extremo a extremo, puedo brindar soluciones completas y personalizadas para tu proyecto. Desde la arquitectura y el diseño hasta la implementación y la optimización, estoy capacitado para manejar todos los aspectos del desarrollo.",
        },
      ],
      statistics: [
        { nombre: "Años de experiencia", porcentaje: 7 },
        { nombre: "Proyectos completados", porcentaje: 1 },
        { nombre: "Honores y premios", porcentaje: 2 },
        // Agrega más estadísticas aquí si lo deseas
      ],
    };
  },
};
</script>
