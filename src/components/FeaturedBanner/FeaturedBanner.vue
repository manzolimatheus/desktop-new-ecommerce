<template>
  <div class="featured-banner">
    <router-link :to="route" v-show="image">
      <img :src="image" :alt="title" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: () => "",
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
.featured-banner:hover {
  filter: saturate(1.5);
}

img {
  width: 100%;
}
</style>
