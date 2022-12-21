<template>
  <img
    src="/img/alien.png"
    alt="Alien Bill"
    :height="height"
    :class="animated ? 'move-around' : ''"
  />
</template>

<script lang="ts">
export default {
  name: "BillAlien",
  props: {
    height: {
      type: Number,
      default: 500,
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.move-around {
  animation: move-in-space 10s infinite;
  position: relative;
  left: -100px;
}

@keyframes move-in-space {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, 50px);
  }
  50% {
    transform: translate(50px, 50px);
  }
  75% {
    transform: translate(50px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
