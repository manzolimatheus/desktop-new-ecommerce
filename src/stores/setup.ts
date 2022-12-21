import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface User {
  name: string;
  email: string;
  phone: string;
}

export const useSteps = defineStore({
  id: "steps",
  state: () => ({
    currentStep: 0 as number,
    address: {
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
    user: {
      name: "Visitante",
      email: "",
      phone: "",
    } as User,
    infoText:
      "Olá, eu sou Bill! Estou aqui para te guiar durante este processo. Vamos começar pela sua localização, por favor, me informe seu CEP" as string,
  }),
  actions: {
    incrementStep(): void {
      this.currentStep++;
    },
    decrementStep(): void {
      this.currentStep--;
    },
    setAddress(address: Address): void {
      this.address = address;
    },
    setInfoText(text: string): void {
      this.infoText = text;
    },
    setUser(user: User): void {
      this.user = user;
    },
    finishSetup(): void {
      this.currentStep = 0;
    }
  },
});
