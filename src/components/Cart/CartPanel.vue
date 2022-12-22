<template>
  <div>
    <button class="button button-cart" @click="toggleCartView">
      Carrinho ({{ cart.products.length }})
    </button>
    <div class="cart-view" v-show="toggleCart">
      <div class="cart">
        <div class="title-flex">
          <h3>Carrinho ({{ cart.products.length }})</h3>
          <button @click="toggleCartView" class="close-button">
            <ion-icon name="close-outline"></ion-icon>
            Fechar
          </button>
        </div>
        <hr />
        <div
          v-for="product in cart.products"
          :key="product.id"
          :class="
            product.featuredText ? 'cart-item featured-text' : 'cart-item'
          "
        >
          <h4 v-show="product.featuredText">{{ product.featuredText }}</h4>
          <div class="title-flex p-2">
            <h3>{{ product.name }}</h3>
            <p v-show="!product.promoPrice">R${{ product.price }}</p>
            <p v-show="product.promoPrice">R${{ product.promoPrice }}</p>
            <button @click="removeProduct(product.id)" class="remove-button">
              Remover
            </button>
          </div>
        </div>
        <hr />
        <div class="display-flex-column mt-2">
          <h3 class="mb-2">
            Total: R${{ cart.total > 1 ? cart.total.toFixed(2) : 0 }}
          </h3>
          <router-link to="/cart" class="button button-cart"
            >Finalizar compra</router-link
          >
        </div>
      </div>
      <div class="overlay" @click="toggleCartView"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { useCart } from "@/stores/cart.js";
import type { Product } from "@/stores/product";

export default {
  setup() {
    const data = useCart();
    return data;
  },
  name: "CartPanel",
  data() {
    return {
      toggleCart: false as boolean,
    };
  },
  methods: {
    toggleCartView(): void {
      this.toggleCart = !this.toggleCart;
    },
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
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(5px);
  display: grid;
  grid-template-columns: 2fr 3fr;
}

.cart {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  overflow-y: scroll;
}

.cart-item {
  background: white;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  margin: 1rem 0;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
}

h4 {
  background: var(--secondary);
}

.featured-text {
  border: 10px solid var(--secondary);
  border-radius: 10px;
}

@media (max-width: 768px) {
  .cart-view {
    grid-template-columns: 1fr;
  }

  .cart {
    height: 100vh;
  }
}
</style>
