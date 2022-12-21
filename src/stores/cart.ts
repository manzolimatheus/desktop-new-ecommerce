import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { type Product } from "./product.js";

export interface Cart {
  products: Product[];
  total: number;
}

export const useCart = defineStore({
  id: "cart",
  state: () => ({
    cart: {
      products: [] as Product[],
      total: 0,
    } as Cart,
  }),
  actions: {
    addToCart(product: Product) {

      const productAlreadyExists = this.cart.products.find(
        (p) => p.id === product.id
      );

      if (productAlreadyExists) {
        alert("Produto já está no carrinho");
        return;
      }

      this.cart.products.push(product);
      this.cart.total += product.price;
    },
    removeFromCart(product: Product) {
      this.cart.products = this.cart.products.filter(
        (p) => p.id !== product.id
      );
      this.cart.total -= product.price;
    },
  },
});
