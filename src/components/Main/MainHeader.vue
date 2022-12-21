<template>
  <header class="red-background">
    <LogoImage />
    <nav>
      <ul>
        <li>
          <RouterLink to="/" class="display-flex-column">
            <ion-icon name="home-outline"></ion-icon>
            <span>Início</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="display-flex-column">
            <ion-icon name="information-circle-outline"></ion-icon>
            <span>Sobre</span>
          </RouterLink>
        </li>
        <li v-show="data.isAuth">
          <RouterLink to="/store" class="display-flex-column">
            <ion-icon name="pricetags-outline"></ion-icon>
            <span>Produtos</span>
          </RouterLink>
        </li>
        <li v-show="data.isAuth">
          <RouterLink to="/cart" class="display-flex-column">
            <ion-icon name="cart-outline"></ion-icon>
            <span>Carrinho({{ cart.cart.products.length }})</span>
          </RouterLink>
        </li>
        <li v-show="data.isAuth">
          <a href="#" @click="logout" class="display-flex-column">
            <ion-icon name="log-out-outline"></ion-icon>
            <span>Sair</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import LogoImage from "./LogoImage.vue";
import { useSteps } from "@/stores/setup.js";
import { useCart } from "@/stores/cart.js";

export default {
  setup() {
    const data = useSteps();
    const cart = useCart();
    return { data, cart };
  },
  name: "MainHeader",
  methods: {
    logout() {
      this.data.resetData();
      this.$router.push("/");
    },
  },
  components: {
    LogoImage,
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
}

img {
  height: 50px;
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

nav ul li a {
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
  text-decoration: none;
}

li a ion-icon {
  font-size: 1.5rem;
}

nav ul li a:hover {
  color: var(--secondary);
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 0.5rem;
  }

  li a span {
    display: none;
  }

  nav ul {
    justify-content: space-between;
    gap: 2rem;
  }
}
</style>
