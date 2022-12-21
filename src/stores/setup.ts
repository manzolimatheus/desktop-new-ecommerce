import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useCart } from "./cart";


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
    isAuth: false as boolean,
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
      localStorage.setItem("address", JSON.stringify(address));
    },
    setInfoText(text: string): void {
      this.infoText = text;
    },
    setUser(user: User): void {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      this.isAuth = true;
    },
    finishSetup(): void {
      this.currentStep = 0;
    },
    resetData(): void {
      localStorage.removeItem("address");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
      useCart().cart.products = [];
      useCart().cart.total = 0;
      this.isAuth = false;
      this.address = {
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
      };
      this.user = {
        name: "Visitante",
        email: "",
        phone: "",
      };
    }
  },
});
