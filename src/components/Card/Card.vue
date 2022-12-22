<template>
  <div :class="featuredText ? 'card featured-text' : 'card'">
    <h4 v-show="featuredText">{{ featuredText }}</h4>
    <router-link :to="`/products/${id}`">
      <img :src="image" :alt="name" v-show="image" />
      <h3 v-show="name">{{ minifiedTitle }}</h3>
      <p v-show="description">{{ miniDescription }}</p>
      <div class="price-flex">
        <div v-show="promoPrice">
          <s class="price">{{ currency }} {{ price }}</s>
          <p class="price promo-price">{{ currency }} {{ promoPrice }}</p>
        </div>
        <p class="price" v-show="!promoPrice && price">
          {{ currency }} {{ price }}
        </p>
      </div>
    </router-link>
    <button class="add-to-cart-button" @click="addToCart" v-show="showButton">
      {{ buttonMessage }}
    </button>
  </div>
</template>

<script lang="ts">
import { useCart } from "@/stores/cart.js";
import type { Product } from "@/stores/product";

export default {
  name: "CardBlock",
  setup() {
    const data = useCart();
    return data;
  },
  props: {
    id: {
      type: Number,
      default: () => 0,
    },
    image: {
      type: String,
      default: () => "",
    },
    name: {
      type: String,
      default: () => "",
    },
    description: {
      type: String,
      default: () => "",
    },
    price: {
      type: Number,
      default: () => 0,
    },
    showButton: {
      type: Boolean,
      default: () => true,
    },
    featuredText: {
      type: String,
      default: () => "",
    },
    promoPrice: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      buttonMessage: "Adicionar ao carrinho",
      currency: "R$",
    };
  },
  methods: {
    addToCart() {
      const product: Product = {
        id: this.id,
        image: this.image,
        name: this.name,
        description: this.description,
        price: this.price,
        featuredText: this.featuredText,
        promoPrice: this.promoPrice,
      } as Product;

      this.addToCart(product);

      this.buttonMessage = "Adicionado ao carrinho";
      setTimeout(() => {
        this.buttonMessage = "Adicionar ao carrinho";
      }, 2000);
    },
  },
  computed: {
    minifiedTitle() {
      return this.name.length > 30
        ? this.name.substring(0, 30) + "..."
        : this.name;
    },
    miniDescription() {
      return this.description.length > 100
        ? this.description.substring(0, 100) + "..."
        : this.description;
    },
  },
};
</script>

<style scoped>
.promo-price {
  font-weight: bolder;
}

s {
  color: grey !important;
  font-size: 14pt !important;
}

.card {
  width: 18rem;
  height: 400px;
  text-align: center;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 auto;
  background: white;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 150px;
  height: 60px;
  object-fit: contain;
}

.card p {
  color: #2f2f2f;
  font-size: 8pt;
  word-break: break-word;
  line-break: anywhere;
  white-space: pre-line;
}

.card h3 {
  color: var(--primary);
  font-weight: bolder;
  font-size: 23pt;
  white-space: pre-line;
}

.card .price {
  color: #2f2f2f;
  font-size: 30pt;
  font-weight: bolder;
}

.card > .add-to-cart-button {
  width: 100%;
  background-color: var(--primary);
  border: 2px solid var(--primary);
  border: none;
  color: white;
  padding: 4%;
}

.card > .add-to-cart-button:hover {
  background: white;
  color: var(--primary);
  border: 2px solid var(--primary);
  cursor: pointer;
}

h4 {
  background: var(--secondary);
}

.featured-text {
  border: 10px solid var(--secondary);
  border-radius: 10px;
  animation: shake 10s infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

a {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
