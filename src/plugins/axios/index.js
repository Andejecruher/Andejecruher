import axios from "axios";

const API_BASE_URL = "https://api.andejecruher.com/api"; // Cambia esta URL a la de tu API

const http = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptor para agregar encabezados comunes a todas las solicitudes
http.interceptors.request.use(
  (config) => {
    // Agregar encabezados aquí, por ejemplo, token de autenticación
    const Andejecruher = JSON.parse(localStorage.getItem("Andejecruher")); // Cambia esto según cómo almacenas el token
    if (Andejecruher) {
      const { access_token, token_type } = Andejecruher;
      config.headers.Authorization = `${token_type} ${access_token}`;
    }

    // Agregar encabezado para el tipo de contenido
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Manejar errores de respuesta aquí
    return Promise.reject(error);
  }
);

export default http;
