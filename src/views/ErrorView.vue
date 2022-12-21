<template>
  <div class="error red-background full-size">
    <h1>404</h1>
    <lottie-player
      src="https://assets3.lottiefiles.com/packages/lf20_NNGsAO1Ve7.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
    <p>Página não encontrada!</p>
    <!-- back to previous route -->
    <a href="#" @click="back">
      <ion-icon name="arrow-back-outline"></ion-icon>
      <span>Voltar</span>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "ErrorView",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // scroll to top
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
h1 {
  font-size: 64pt;
  font-weight: 900;
  color: #fff;
  text-align: center;
}

lottie-player {
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 300px;
  margin: 0 auto;
}

p {
  font-size: 24pt;
  font-weight: 900;
  color: #fff;
  text-align: center;
}

a {
  font-size: 16pt;
  font-weight: 900;
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  animation: move 1s ease-in-out infinite alternate;
}

@keyframes move {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10px);
  }
}
</style>
