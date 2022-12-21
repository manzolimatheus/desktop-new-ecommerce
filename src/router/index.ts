import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "Erro",
      component: () => import("../views/ErrorView.vue"),
    },
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "Sobre",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/journey",
      name: "Jornada",
      beforeEnter: (to, from, next) => {
        const isAuth =
          localStorage.getItem("user") && localStorage.getItem("address");
        if (!isAuth) {
          next();
        } else {
          next("/store");
        }
      },
      component: () => import("../views/CustomerJourneyView.vue"),
    },
    {
      path: "/store",
      name: "Loja",
      beforeEnter: (to, from, next) => {
        const isAuth =
          localStorage.getItem("user") && localStorage.getItem("address");
        if (isAuth) {
          next();
        } else {
          next("/journey");
        }
      },
      component: () => import("../views/StoreView.vue"),
    },
    {
      path: "/cart",
      name: "Carrinho",
      beforeEnter: (to, from, next) => {
        const isAuth =
          localStorage.getItem("user") && localStorage.getItem("address");
        if (isAuth) {
          next();
        } else {
          next("/journey");
        }
      },
      component: () => import("../views/CartView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const title = to.name?.toString() + " | DESKTOP";

  document.title = title;
  next();
});

export default router;
