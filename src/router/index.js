import { useAuthStore } from "@stores/auth";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/inicio" },
  {
    path: "/",
    component: () => import("../layouts/default.vue"),
    children: [
      {
        path: "inicio",
        component: () => import("../views/pages/home/Home.vue"),
      },

      // {
      //   path: 'portafolio',
      //   component: () => import('../views/pages/portafolio/Portafolio.vue'),
      // },
      {
        path: "blog",
        component: () => import("../views/pages/blog/Blog.vue"),
      },
      {
        path: "blog/:id",
        component: () => import("../views/pages/blog/Post.vue"),
      },
      {
        path: "contacto",
        component: () => import("../views/pages/contact/Contact.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("../layouts/blank.vue"),
    children: [
      {
        path: "login",
        component: () => import("../pages/login.vue"),
      },
      {
        path: "register",
        component: () => import("../pages/register.vue"),
      },
      {
        path: "forgot-password",
        component: () => import("../pages/forgot-password.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        component: () => import("../pages/[...all].vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../layouts/dashboard.vue"),
    meta: { requireAuth: true },
    children: [
      {
        path: "usuarios",
        component: () => import("../views/pages/usuarios/Usuarios.vue"),
        meta: { requireAuth: true },
      },
      {
        path: "categorias",
        component: () => import("../pages/typography.vue"),
        meta: { requireAuth: true },
      },
      {
        path: "articulos",
        component: () => import("../pages/typography.vue"),
        meta: { requireAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!useAuthStore().isAuthenticated) {
      next("/inicio");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
