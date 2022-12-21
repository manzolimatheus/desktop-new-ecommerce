<template>
  <div class="container">
    <Carousel :images="carousel.carousel.items" />
    <div class="d-flex">
      <h1>Olá, {{ steps.user.name.split(" ")[0] }} 👽🖖</h1>
      <CartPanel />
    </div>
    <ProductCarousel
      v-for="category in data.categories"
      :key="category.id"
      :products="getProductsByCategoryId(category.id)"
      :title="category.name"
    />
  </div>
</template>

<script lang="ts">
import CartPanel from "@/components/Cart/CartPanel.vue";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel.vue";
import { useProducts } from "@/stores/product.js";
import { useSteps } from "@/stores/setup.js";
import { useCarousel } from "@/stores/carousel.js";
import Carousel from "@/components/Carousel/Carousel.vue";

export default {
  setup() {
    const data = useProducts();
    const steps = useSteps();
    const carousel = useCarousel();

    return {
      data,
      steps,
      carousel,
    };
  },
  name: "StoreView",
  methods: {
    getProductsByCategoryId(id: number) {
      return this.data.products.filter((product) => product.categoryId === id);
    },
  },
  components: {
    ProductCarousel,
    CartPanel,
    Carousel,
  },
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .d-flex {
    flex-direction: column;
  }
}
</style>
