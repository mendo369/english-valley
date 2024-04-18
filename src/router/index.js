import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ing-sistemas",
      name: "ing-sistemas",
      component: () => import("../views/IngSistemas.vue"),
    },
    {
      path: "/ing-alimentos",
      name: "ing-alimentos",
      component: () => import("../views/IngAlimentos.vue"),
    },
    {
      path: "/administracion",
      name: "administracion",
      component: () => import("../views/Administracion.vue"),
    },
    {
      path: "/construcccion",
      name: "construcccion",
      component: () => import("../views/Construccion.vue"),
    },
    {
      path: "/contaduria",
      name: "contaduria",
      component: () => import("../views/Contaduria.vue"),
    },
    {
      path: "/nutricion",
      name: "nutricion",
      component: () => import("../views/Nutricion.vue"),
    },
    {
      path: "/tec-alimentos",
      name: "tec-alimentos",
      component: () => import("../views/TecAlimentos.vue"),
    },
    {
      path: "/desarrollo-software",
      name: "desarrollo-software",
      component: () => import("../views/DesarrolloSoftware.vue"),
    },
    {
      path: "/tec-electronica",
      name: "tec-electronica",
      component: () => import("../views/TecElectronica.vue"),
    },
    {
      path: "/trabajo-social",
      name: "trabajo-social",
      component: () => import("../views/TrabajoSocial.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
