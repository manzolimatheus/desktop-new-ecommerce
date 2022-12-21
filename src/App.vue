<template>
  <div>
    <MainHeader />
    <RouterView />
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MainHeader from "./components/Main/MainHeader.vue";
import MainFooter from "./components/Main/MainFooter.vue";
</script>