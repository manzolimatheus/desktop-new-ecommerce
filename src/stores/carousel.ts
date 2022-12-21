import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface CarouselItem {
  title: string;
  image: string;
}

export interface Carousel {
  items: CarouselItem[];
}

export const useCarousel = defineStore({
  id: "carousel",
  state: () => ({
    carousel: {
      items: [
        {
          image: "/img/banner/banner.jpg",
          title: "Promoção de natal Desktop - 300 Mega por 99,90/mês",
        },
        {
          image: "/img/banner/banner2.jpg",
          title: "600 mega por 99,90/mês",
        },
        {
          image: "/img/banner/banner3.png",
          title: "200 mega por 89,90/mês",
        },
        {
          image: "/img/banner/banner4.jpg",
          title:
            "Blacktop - Somente de 15 a 30 de novembro - 600 mega por 79,90/mês",
        },
      ] as CarouselItem[],
    } as Carousel,
  }),
});
