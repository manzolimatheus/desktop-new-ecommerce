<template>
  <RouterLink to="/">
    <img
      src="https://abduzidos.desktop.com.br/wp-content/uploads/2021/05/LOGO-DESKTOP-2021_Fundo-Escuro-1024x237.png"
      :height="height"
      alt="Logo Desktop"
    />
  </RouterLink>
</template>

<script lang="ts">
export default {
  props: {
    height: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
  filter: brightness(1.1);
}
</style>