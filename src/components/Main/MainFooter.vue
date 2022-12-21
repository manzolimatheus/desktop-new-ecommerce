<template>
  <footer>
    <LogoImage />
    <div class="col-3">
      <section class="links">
        <h1>Links</h1>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">Sobre</router-link>
          </li>
        </ul>
      </section>
      <section class="media">
        <h1>Redes Sociais</h1>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </section>
      <section class="about">
        <h1>Sobre</h1>
        <ul>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import LogoImage from "./LogoImage.vue";

export default {
  name: "MainFooter",
  components: {
    LogoImage,
  },
};
</script>

<style scoped>
footer {
  background: var(--dark);
  padding: 2rem;
}

section h1 {
  color: white;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

ul li a {
  color: white;
}

.col-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
</style>