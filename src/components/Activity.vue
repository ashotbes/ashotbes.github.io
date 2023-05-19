<template>
  <div class="activity-wrapper">
    <div class="activity-title">
      <p>Activity</p>
    </div>
    <div class="activity-body">
      <div class="activity-arrow">
        <svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_376_1155)">
            <path
                d="M3.27866 18.2958L14.5754 31.6721C14.9455 32.1101 15.5447 32.1093 15.9143 31.6698C16.2835 31.2303 16.2826 30.5184 15.9124 30.0801L5.28811 17.4999L15.9134 4.91989C16.2836 4.48149 16.2845 3.77003 15.9154 3.3305C15.7301 3.11017 15.4875 3 15.2448 3C15.0028 3 14.761 3.10943 14.5761 3.32824L3.2787 16.7042C3.10043 16.9147 3.00039 17.2013 3.00038 17.4999C3.00037 17.7986 3.10068 18.0848 3.27866 18.2958Z"
                fill="#0D87C7"/>
          </g>
          <defs>
            <filter id="filter0_d_376_1155" x="0.000488281" y="0" width="21.1909" height="37"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix"
                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dx="1" dy="1"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_376_1155"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_376_1155" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>

      <swiper
          :slidesPerView="7"
          :spaceBetween="30"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="points.breakpoints"
      >
        <swiper-slide class="activity-item" v-for="(image, index) in images" :key="index">
          <img :src="image.image" alt="" :key="image">
          <a href="#" class="activity-item-link">{{ image.title }}</a>
        </swiper-slide>
      </swiper>

      <div class="activity-arrow">
        <svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_376_1156)">
            <path
                d="M15.9121 18.2958L4.61547 31.6721C4.24535 32.1101 3.64614 32.1093 3.27666 31.6698C2.90747 31.2303 2.90844 30.5184 3.27861 30.0801L13.9028 17.4999L3.27888 4.91989C2.90878 4.48149 2.90785 3.77003 3.27701 3.3305C3.46224 3.11017 3.7049 3 3.94755 3C4.18958 3 4.43128 3.10943 4.61616 3.32824L15.9121 16.7042C16.0904 16.9147 16.1904 17.2013 16.1904 17.4999C16.1904 17.7986 16.09 18.0848 15.9121 18.2958Z"
                fill="#0D87C7"/>
          </g>
          <defs>
            <filter id="filter0_d_376_1156" x="0.000488281" y="0" width="21.1899" height="37"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix"
                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dx="1" dy="1"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix"
                       result="effect1_dropShadow_376_1156"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_376_1156"
                       result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/images/activity/meteorology.svg'
import img2 from '../assets/images/activity/air.svg'
import img3 from '../assets/images/activity/water.svg'
import img4 from '../assets/images/activity/climate.svg'
import img5 from '../assets/images/activity/groundwater.svg'
import img6 from '../assets/images/activity/forests.svg'
import img7 from '../assets/images/activity/soil.svg'
// optional style for arrows & dots

import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/swiper-bundle.css';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


const images = [
  {image: img1, title: 'Meteorology'},
  {image: img2, title: 'Air'},
  {image: img3, title: 'Surface Water'},
  {image: img4, title: 'Climate'},
  {image: img5, title: 'Groundwater'},
  {image: img6, title: 'Forests'},
  {image: img7, title: 'Soil'}
]

const points = {
  breakpoints: {

    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    // when window width is <= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    // when window width is <= 1024px

    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },

    1220: {
      slidesPerView: 7,
      spaceBetween: 30
    },

    1920: {
      slidesPerView: 7,
      spaceBetween: 30
    },


  }
}
</script>

<style lang="scss">
@import "@/styles/activity";
</style>
