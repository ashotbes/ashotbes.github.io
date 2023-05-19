<template>
    <Header/>
    <Main/>
    <Activity/>
    <Map/>
    <News/>
    <Footer/>
    <Slider/>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Activity from "@/components/Activity.vue";
import Map from "@/components/Map.vue";
import News from "@/components/News.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: 'App',
    components: {
        Footer,
        News,
        Map,
        Header,
        Main,
        Activity
    }
}
</script>

<style lang="scss">
</style>
