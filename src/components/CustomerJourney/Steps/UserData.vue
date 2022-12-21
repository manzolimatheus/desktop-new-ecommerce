<template>
  <div>
    <section class="user">
      <form @submit.prevent="saveUser">
        <label for="name" class="form-input">
          <h3>Digite seu nome</h3>
          <input
            type="text"
            v-model="formUser.name"
            placeholder="Leandro Pirante"
            id="name"
          />
          <label for="phone" class="form-input">
            <h3>Digite seu número de telefone</h3>
            <input
              type="tel"
              v-model="formUser.phone"
              placeholder="19993324312"
              id="phone"
            />
          </label>
          <label for="email" class="form-input">
            <h3>Digite seu E-mail</h3>
            <input
              type="email"
              v-model="formUser.email"
              placeholder="leandro@desktop.com"
              id="email"
            />
          </label>
          <button class="button">Continuar</button>
        </label>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { useSteps, type User } from "@/stores/setup.js";

export default {
  setup() {
    const data = useSteps();
    return data;
  },
  name: "AddressSearch",
  data() {
    return {
      formUser: {
        name: "",
        phone: "",
        email: "",
      } as User,
    };
  },
  methods: {
    saveUser(): void {
      this.setUser(this.formUser);
      this.finishSetup();
      this.$router.push("/store");
    },
  },
  mounted() {
    this.setInfoText("Agora precisamos de algumas informações suas");
    // scroll to top of the page
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
a {
  color: white;
}
</style>
