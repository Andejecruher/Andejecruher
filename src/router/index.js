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
        name: "inicio",
      },
      {
        path: "blog",
        component: () => import("../views/pages/blog/Blog.vue"),
        name: "blog",
      },
      {
        path: "blog/:id",
        component: () => import("../views/pages/blog/Post.vue"),
        name: "post",
      },
      {
        path: "contacto",
        component: () => import("../views/pages/contact/Contact.vue"),
        name: "contacto",
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
        meta: { requireAuth: false },
      },
      {
        path: "register",
        component: () => import("../pages/register.vue"),
        meta: { requireAuth: false },
      },
      {
        path: "forgot-password",
        component: () => import("../pages/forgot-password.vue"),
        meta: { requireAuth: false },
      },
      {
        path: "/:pathMatch(.*)*",
        component: () => import("../pages/[...all].vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
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
      {
        path: "profile",
        component: () => import("../pages/account-settings.vue"),
        meta: { requireAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const excludeRoutes = ["inicio", "blog", "post", "contacto"];

router.beforeEach((to, from, next) => {
  if (excludeRoutes.includes(to.name)) {
    next();
  } else {
    if (to.matched.some((record) => record.meta.requireAuth)) {
      if (!useAuthStore().isAuthenticated) {
        next("/inicio");
      } else {
        next();
      }
    } else {
      if (useAuthStore().isAuthenticated) {
        next("/admin");
      } else {
        next();
      }
    }
  }
});

export default router;
