import { defineStore } from "pinia";

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string | null;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | null;
  featuredText: null | string;
  categoryId: number;
  promoPrice: number | null;
}

export const useProducts = defineStore({
  id: "products",
  state: () => ({
    categories: [
      {
        id: 1,
        name: "Internet",
        description: "Internet para todos os gostos",
        image: null,
      },
      {
        id: 2,
        name: "Internet + TV",
        description: "Internet + TV para toda a família",
        image: null,
      },
    ] as Category[],
    products: [
      {
        id: 1,
        name: "1 GIGA",
        description: "1 GIGA MEGA para curtir a internet",
        price: 79.9,
        image:
          "https://cdn3.iconfinder.com/data/icons/network-68/64/speed-internet-fast-network-512.png",
        featuredText: "Mais rápido",
        categoryId: 1,
        promoPrice: 69.9,
      },
      {
        id: 2,
        name: "200 MEGA",
        description: "300 MEGA para curtir a internet",
        price: 69.9,
        image: null,
        featuredText: null,
        categoryId: 1,
        promoPrice: null,
      },
      {
        id: 3,
        name: "300 MEGA",
        description: "600 MEGA para curtir a internet",
        price: 59.9,
        image: null,
        featuredText: null,
        categoryId: 1,
        promoPrice: null,
      },
      {
        id: 4,
        name: "400 MEGA",
        description: "600 MEGA para curtir a internet",
        price: 59.9,
        image: null,
        featuredText: null,
        categoryId: 1,
        promoPrice: null,
      },
      {
        id: 5,
        name: "500 MEGA",
        description: "600 MEGA para curtir a internet",
        price: 59.9,
        image: null,
        featuredText: null,
        categoryId: 1,
        promoPrice: null,
      },
      {
        id: 6,
        name: "600 MEGA",
        description: "600 MEGA para curtir a internet",
        price: 59.9,
        image: null,
        featuredText: null,
        categoryId: 1,
        promoPrice: null,
      },
      {
        id: 7,
        name: "700 MEGA",
        description: "600 MEGA para curtir a internet",
        price: 59.9,
        image: null,
        featuredText: null,
        categoryId: 1,
        promoPrice: null,
      },
      {
        id: 8,
        name: "800 MEGA",
        description: "600 MEGA para curtir a internet",
        price: 59.9,
        image: null,
        featuredText: null,
        categoryId: 1,
        promoPrice: null,
      },
      {
        id: 9,
        name: "900 MEGA",
        description: "600 MEGA para curtir a internet",
        price: 59.9,
        image: null,
        featuredText: null,
        categoryId: 1,
        promoPrice: null,
      },
      {
        id: 10,
        name: "300 MEGA + GloboPlay",
        description: "Internet e TV para toda a família",
        price: 112.19,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Globoplay_logo_2020.svg/2560px-Globoplay_logo_2020.svg.png",
        featuredText: "Melhor oferta",
        categoryId: 2,
        promoPrice: null,
      },
      {
        id: 11,
        name: "400 MEGA + Amazon Prime",
        description: "Internet e TV para toda a família",
        price: 120.19,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg",
        featuredText: "Melhor custo-benefício",
        categoryId: 2,
        promoPrice: 100.19,
      },
    ] as Product[],
  }),
});
