<template>
    <div>
        <VueSlickCarousel :arrows="false" :dots="false">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Slider',
    components: { VueSlickCarousel },
}
</script>