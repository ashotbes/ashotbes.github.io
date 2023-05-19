import { createApp } from 'vue'
import App from './App.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper';



const app = createApp(App);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);
app.component(Pagination, Swiper)


app.mount('#app');
