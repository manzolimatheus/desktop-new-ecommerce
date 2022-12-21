<template>
  <div v-show="images.length > 0" :style="backgroundStyle">
    <div class="carousel" :style="backgroundStyleBlur">
      <button v-show="images.length > 1" @click="previousSlide">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </button>
      <legend>{{ images[actualIndex].title }}</legend>
      <button v-show="images.length > 1" @click="nextSlide">
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselBanner",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      actualIndex: 0,
      interval: null,
    };
  },
  methods: {
    nextSlide() {
      this.actualIndex += 1;
      if (this.actualIndex >= this.images.length) {
        this.actualIndex = 0;
      }
      this.resetInterval();
    },
    previousSlide() {
      this.actualIndex -= 1;
      if (this.actualIndex < 0) {
        this.actualIndex = this.images.length - 1;
      }
      this.resetInterval();
    },
    resetInterval() {
      clearInterval(this.interval);
      this.runCarousel();
    },
    runCarousel() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
  },
  computed: {
    backgroundStyle() {
      return {
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        backgroundImage: `url(${this.images[this.actualIndex].image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
    },
    backgroundStyleBlur() {
      return {
        backgroundImage: `url(${this.images[this.actualIndex].image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backdropFilter: "blur(5px)",
      };
    },
  },
  mounted() {
    if (this.images.length > 1) this.runCarousel();
  },
};
</script>

<style scoped>
.carousel {
  height: 500px;
  width: 100%;
  display: flex;
  margin: 2rem 0;
}

legend {
  background: var(--dark);
  color: white;
  width: 100%;
  text-align: center;
  height: fit-content;
  align-self: flex-end;
}

button {
  background: white;
  border: none;
  height: 100%;
  width: 50px;
  font-size: 16pt;
}

button:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
</style>
