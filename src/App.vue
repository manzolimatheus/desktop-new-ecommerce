<template>
  <div>
    <MainHeader />
    <RouterView />
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import MainHeader from "./components/Main/MainHeader.vue";
import MainFooter from "./components/Main/MainFooter.vue";
import { useSteps } from "@/stores/setup.js";

export default {
  name: "App",
  components: {
    RouterView,
    MainHeader,
    MainFooter,
  },
  setup() {
    const data = useSteps();
    return data;
  },
  methods: {
    getLocalStorageData(): void {
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null;
      const address = localStorage.getItem("address")
        ? JSON.parse(localStorage.getItem("address") as string)
        : null;

      if (user) {
        this.setUser(user);
      }

      if (address) {
        this.setAddress(address);
      }

      if (user && address) {
        this.$router.push("/store");
      }
    },
  },
  created() {
    this.getLocalStorageData();
  },
};
</script>
