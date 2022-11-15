import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Carousel, Slide, Pagination, Navigation);
});
