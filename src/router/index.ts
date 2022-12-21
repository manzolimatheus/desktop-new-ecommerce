import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/ErrorView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/journey",
      name: "journey",
      component: () => import("../views/CustomerJourneyView.vue"),
    },
    {
      path: "/store",
      name: "panel",
      component: () => import("../views/StoreView.vue"),
    }
  ],
});

export default router;
