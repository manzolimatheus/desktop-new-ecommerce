<template>
  <div>
    <section class="cep" v-show="!dataLoaded">
      <form @submit.prevent="getAddressData">
        <label for="address" class="form-input">
          <h3>Digite seu CEP</h3>
          <input
            type="text"
            v-model="cep"
            placeholder="Exemplo: 13848800"
            id="address"
          />
          <button class="button">Continuar</button>
        </label>
      </form>
      <div class="text-center">
        <a href="">Não sei meu CEP</a>
      </div>
    </section>
    <section class="form" v-show="dataLoaded">
      <h3>Confirme seus dados</h3>
      <!-- input for cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi -->
      <form @submit.prevent="saveAddress" class="save-address-form">
        <label for="cep" class="form-input">
          <h4>CEP</h4>
          <input
            type="text"
            v-model="fetchAddress.cep"
            placeholder="Rua das Flores, 13"
            id="cep"
          />
        </label>
        <label for="logradouro" class="form-input">
          <h4>Logradouro</h4>
          <input
            type="text"
            v-model="fetchAddress.logradouro"
            placeholder="Rua das Flores, 13"
            id="logradouro"
          />
        </label>
        <label for="complemento" class="form-input">
          <h4>Complemento</h4>
          <input
            type="text"
            v-model="fetchAddress.complemento"
            placeholder="Rua das Flores, 13"
            id="complemento"
          />
        </label>
        <label for="bairro" class="form-input">
          <h4>Bairro</h4>
          <input
            type="text"
            v-model="fetchAddress.bairro"
            placeholder="Rua das Flores, 13"
            id="bairro"
          />
        </label>
        <label for="localidade" class="form-input">
          <h4>Localidade</h4>
          <input
            type="text"
            v-model="fetchAddress.localidade"
            placeholder="Rua das Flores, 13"
            id="localidade"
          />
        </label>
        <label for="uf" class="form-input">
          <h4>UF</h4>
          <input
            type="text"
            v-model="fetchAddress.uf"
            placeholder="Rua das Flores, 13"
            id="uf"
          />
        </label>
        <button class="button">Salvar Endereço</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { useSteps, type Address } from "@/stores/setup.js";

export default {
  setup() {
    const data = useSteps();
    return data;
  },
  name: "AddressSearch",
  data() {
    return {
      cep: "" as string,
      fetchAddress: {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        ibge: "",
        gia: "",
        ddd: "",
        siafi: "",
      } as Address,
      dataLoaded: false as boolean,
    };
  },
  methods: {
    getAddressData(): void {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.fetchAddress = data;
        });

      this.setInfoText(
        "Muito bem! Agora confirme os dados de sua localização."
      );
      this.dataLoaded = true;
    },
    saveAddress(): void {
      this.setAddress(this.fetchAddress);
      this.incrementStep();
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
</style>
