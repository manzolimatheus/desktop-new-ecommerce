import { defineStore } from "pinia";
import type { Product } from "./product.js";

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

      console.log(this.cart.total);

      if (product.promoPrice) {
        this.cart.total += product.promoPrice;
      } else {
        this.cart.total += product.price;
      }

      console.log(product);
      console.log(this.cart.total);

      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    removeFromCart(product: Product) {
      this.cart.products = this.cart.products.filter(
        (p) => p.id !== product.id
      );

      if (product.promoPrice) {
        this.cart.total -= product.promoPrice;
      } else {
        this.cart.total -= product.price;
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    getLocalStorageCart(): void {
      const cart = localStorage.getItem("cart") || null;
      if (cart) {
        this.cart = JSON.parse(cart);
      }
    },
  },
});
