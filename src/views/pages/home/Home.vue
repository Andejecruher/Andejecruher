<template>
  <!-- 👉 Transactions -->
  <VCol cols="12" md="12" sm="12" order="3">
    <Banner />
    <History :statistics="statistics" :time="200" />
    <Services :title="title" :services="services" />
    <TimeLine :education="education" :works="works" />
    <FormContact />
    <ContactFormCard />
  </VCol>
</template>

<script>
import FormContact from "../../../components/FormContact.vue";
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
    FormContact,
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
        { nombre: "Años de experiencia", porcentaje: 3 },
        { nombre: "Proyectos completados", porcentaje: 1 },
        { nombre: "Honores y premios", porcentaje: 2 },

        // Agrega más estadísticas aquí si lo deseas
      ],
      education: [
        {
          name: "Universidad IEU",
          subname: "Ingenieria en desarrollo de software",
          description:
            "Actualmente, me encuentro inmerso en mi formación académica en la Universidad IEU, cursando con entusiasmo la carrera de Ingeniería en Desarrollo de Software. Estoy emocionado por la oportunidad de adquirir conocimientos técnicos y habilidades prácticas que me permitan destacar en el mundo del desarrollo de software.",
          date: "10 / 09 / 2022 - Actualidad",
          titleBtn: "Diploma",
        },
        {
          name: "CBTis 169",
          subname: "Técnico en Informática",
          description:
            "Durante mi educación en el CBTis 169, tuve la oportunidad de explorar mi pasión por la tecnología y desarrollar habilidades clave que han dejado una huella significativa en mi camino académico. Uno de los momentos más destacados de mi experiencia fue la emocionante participación en concursos de tecnología a nivel internacional, donde tuvimos el honor de representar a México en Santiago de Chile.",
          date: "2010 - 2013",
          titleBtn: "Diploma",
        },
      ],
      works: [
        {
          name: "Full Stack Developer",
          subname: "DiferenteWeb",
          description:
            "Desarrollo y mantenimiento de APIs robustas para integrar servicios externos y mejorar la eficiencia en la comunicación entre aplicaciones. Integració n de soluciones de comercio electrónico mediante la plataforma BigCommerce, incluyendo la personalización de tiendas. Trabajo con bases de datos relacionales (MySQL) y no relacionales (MongoDB), asegurando la escalabilidad y seguridad en el almacenamiento de datos. ",
          date: "09/2023 - 06/2024",
          titleBtn: "Reservar",
        },
        {
          name: "Full Stack Developer",
          subname: "Hoteles Buenaventura",
          description:
            "Se desarrolló un calendario de fechas para Hoteles Buenaventura utilizando un stack de desarrollo moderno. Con Laravel y MySQL, se crearon APIs REST robustas que gestionan reservas y disponibilidad. El frontend, implementado con React.js, permite a los usuarios visualizar y seleccionar fechas de forma interactiva.",
          date: "05/2022 - 04/2023",
          titleBtn: "Reservar",
        },
        {
          name: "Full Stack Developer",
          subname: "TheRocketCode",
          description:
            "Como Full Stack Developer en TheRocketCode, mi rol se centró en el desarrollo de funcionalidades para aplicaciones web utilizando React.js. Un logro destacado fue la migración exitosa del cotizador de precios de Next.js a React.js, optimizando la experiencia del usuario. Además, contribuí en la construcción de una API sólida con Node.js, Express y MongoDB para una comunicación eficiente entre el frontend y backend. ",
          date: "05/2022 - 04/2023",
          titleBtn: "Reservar",
        },
        {
          name: "Diseñadores web",
          subname: "Creativa Softline",
          description:
            "Como Diseñador Web en Creativa Softline, fui responsable de liderar la creación y desarrollo del concepto para diversos sitios web. Mi rol abarcó desde el diseño inicial hasta la implementación, donde utilicé herramientas como Skeleton, Bootstrap y Boilerplate para crear páginas web visualmente atractivas y altamente funcionales.",
          date: "2016 - 2018",
          titleBtn: "Reservar",
        },
      ],
    };
  },
};
</script>
