<template>
  <div class="space">
    <div class="old-tv"></div>
    <BillAlien :animated="true" />
    <div class="info">
      <h1>A <strong>INTERNET</strong> que vêm de outro planeta!</h1>
      <img
        src="/img/preco.png"
        alt="Promoção da Desktop"
        width="500"
        class="mt-2"
      />
      <RouterLink to="/journey">
        <span>Quero Conhecer</span>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import BillAlien from "@/components/Home/Bill/BillAlien.vue";

export default {
  name: "HomeView",
  components: {
    BillAlien,
  },
  mounted() {
    // scroll to top
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.space {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(https://thumbs.gfycat.com/AdeptMealyAzurevase-size_restricted.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.old-tv {
  background: url(https://64.media.tumblr.com/abe7045034374988c158bfd392e1bd53/67b3f64c04af09c5-92/s400x600/579d591b6fe85ca27ac348f25d43391bbc39834c.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.03;
  z-index: 1;
}

.bill {
  z-index: 2;
}

.info {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  z-index: 2;
}

.info strong {
  color: var(--secondary);
}

.info a {
  background: var(--secondary);
  color: var(--dark);
  padding: 1rem;
  border-radius: 10px;
  margin-top: 10%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.info a ion-icon {
  font-size: 2rem;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .space {
    grid-template-columns: 1fr;
    height: 100%;
  }
}
</style>
