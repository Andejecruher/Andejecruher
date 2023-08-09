import axios from 'axios'

const API_BASE_URL = 'https://api.andejecruher.com/api' // Cambia esta URL a la de tu API

const http = axios.create({
  baseURL: API_BASE_URL,
})

// Interceptor para agregar encabezados comunes a todas las solicitudes
http.interceptors.request.use(config => {
  // Agregar encabezados aquí, por ejemplo, token de autenticación
  const token = localStorage.getItem('access_token') // Cambia esto según cómo almacenas el token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  // Agregar encabezado para el tipo de contenido
  config.headers['Content-Type'] = 'application/json'
  
  return config
}, error => {
  return Promise.reject(error)
})

// Interceptor para manejar errores de respuesta
http.interceptors.response.use(response => {
  return response
}, error => {
  // Manejar errores de respuesta aquí
  return Promise.reject(error)
})

export default http
