import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/inicio' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'inicio',
          component: () => import('../views/pages/home/Home.vue'),
        },

        // {
        //   path: 'portafolio',
        //   component: () => import('../views/pages/portafolio/Portafolio.vue'),
        // },
        // {
        //   path: 'blog',
        //   component: () => import('../views/pages/blog/Blog.vue'),
        // },
        // {
        //   path: 'blog/:id',
        //   component: () => import('../views/pages/blog/Post.vue'),
        // },
        {
          path: 'contacto',
          component: () => import('../views/pages/contact/Contact.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: 'forgot-password',
          component: () => import('../pages/forgot-password.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
    {
      path: '/dashboard',
      component: () => import('../layouts/dashboard.vue'),
      children: [
        {
          path: 'usuarios',
          component: () => import('../views/pages/usuarios/Usuarios.vue'),
        },
        {
          path: 'categorias',
          component: () => import('../pages/typography.vue'),
        },
        {
          path: 'articulos',
          component: () => import('../pages/typography.vue'),
        },
      ],
    },
  ],
})

export default router
