<template>
  <div class="red-background col-2">
    <div class="info">
      <div class="alien-message">
        <p class="message">
          {{ infoText }}
        </p>
        <img src="/img/cute-alien.png" alt="Alien fofo em disco voador" />
      </div>
    </div>
    <div class="data">
      <button
        @click="previousStep"
        v-show="currentStep > 0"
        class="back-button"
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span>Voltar</span>
      </button>
      <AddressSearch v-if="currentStep == 0" />
      <UserData v-if="currentStep == 1" />
    </div>
  </div>
</template>

<script lang="ts">
import AddressSearch from "@/components/CustomerJourney/Steps/AddressSearch.vue";
import { useSteps } from "@/stores/setup.js";
import UserData from "./Steps/UserData.vue";

export default {
  setup() {
    const data = useSteps();
    return data;
  },
  name: "CustomerSteps",
  components: {
    AddressSearch,
    UserData,
  },
  methods: {
    previousStep() {
      this.decrementStep();
    },
  },
  mounted() {
    this.setInfoText(
      "Olá, eu sou Bill! Estou aqui para te guiar durante este processo. Vamos começar pela sua localização, por favor, me informe seu CEP"
    );
  },
};
</script>

<style scoped>

.back-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
}

.col-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
}

.alien-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.alien-message img {
  padding: 2rem;
  height: 300px;
  margin: 0 auto;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-20px);
  }

  100% {
    transform: translatey(0px);
  }
}

.info {
  width: 100%;
}

.info h1 {
  text-align: center;
}

.message {
  background: #a11818;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 84%,
    76% 85%,
    64% 100%,
    51% 85%,
    0 84%
  );
  padding: 2rem;
  color: white;
  width: 80%;
}

.data {
  padding: 4rem;
}

@media (max-width: 768px) {
  .col-2 {
    grid-template-columns: 1fr;
    padding-top: 2%;
  }

  .data {
    padding: 2rem;
  }
}

</style>
