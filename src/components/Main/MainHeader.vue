<template>
  <header class="red-background">
    <LogoImage />
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Início</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">Sobre</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import LogoImage from "./LogoImage.vue";

export default {
  name: "MainHeader",
  components: {
    LogoImage,
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
}

img {
  height: 50px;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

nav ul li a {
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  text-decoration: none;
}

nav ul li a:hover {
  color: var(--secondary);
}
</style>