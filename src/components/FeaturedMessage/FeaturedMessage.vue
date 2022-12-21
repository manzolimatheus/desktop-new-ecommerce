<template>
  <div class="featured-message" v-show="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>

import data from "~/assets/db/db.json"

export default {
  data() {
    return {
      message: "",
    };
  },
  created() {
    this.message = data.featuredMessage;
  },
};
</script>

<style scoped>
.featured-message {
  background: var(--primary);
  color: var(--white);
  padding: 0.5rem;
  text-align: center;
}
</style>