<template>
  <div class="cart-page">
    <div class="cart-view">
      <div class="cart">
        <div class="title-flex">
          <h3>Carrinho ({{ cart.products.length }})</h3>
        </div>
        <hr />
        <div v-show="cart.products.length < 1" class="empty-cart">
          <h3>Está meio vazio aqui...Tente adicionar produtos.</h3>
          <lottie-player
            src="https://assets10.lottiefiles.com/private_files/lf30_ihactlvq.json"
            background="transparent"
            speed="1"
            style="height: 300px"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div
          v-show="cart.products.length > 0"
          v-for="product in cart.products"
          :key="product.id"
          :class="
            product.featuredText ? 'cart-item featured-text' : 'cart-item'
          "
        >
          <h4 v-show="product.featuredText">{{ product.featuredText }}</h4>
          <div class="title-flex p-2">
            <h3>{{ product.name }}</h3>
            <p>R${{ product.price }}</p>
            <button @click="removeProduct(product.id)" class="remove-button">
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="total-view">
      <h3>Total: R${{ cart.total > 1 ? cart.total.toFixed(2) : 0 }}</h3>
      <button class="button">Finalizar Carrinho</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useCart } from "@/stores/cart.js";
import type { Product } from "@/stores/product";

export default {
  name: "CartView",
  setup() {
    const data = useCart();
    return data;
  },
  methods: {
    removeProduct(id: number): void {
      const product: Product = this.cart.products.find(
        (product: Product) => product.id === id
      ) as Product;

      if (product) {
        this.removeFromCart(product);
      }
    },
  },
  created() {
    this.getLocalStorageCart();
  },
};
</script>

<style scoped>
.title-flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.button-cart {
  background: var(--primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
}

.close-button,
.remove-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
}

.remove-button {
  font-size: 1rem;
}

.cart-view {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.cart {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 2rem;
  overflow-y: scroll;
}

.cart-item {
  background: white;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  margin: 1rem 0;
}

h4 {
  background: var(--secondary);
}

.featured-text {
  border: 10px solid var(--secondary);
  border-radius: 10px;
}

.cart-page {
  display: grid;
  grid-template-columns: 80% 20%;
  gap: 1rem;
  padding: 2rem;
  height: 100vh;
}

.total-view {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .cart-view {
    grid-template-columns: 100%;
  }

  .cart-page {
    grid-template-columns: 100%;
    padding: 0;
  }
}
</style>
