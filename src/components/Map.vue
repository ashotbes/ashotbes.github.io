<template>
    <div class="map">
        <div class="map-wrapper">
            <p class="map-title">Interactive Map</p>
            <div class="main-map">
                <l-map ref="map" v-model:zoom="zoom" :center="[39.967216320355995, 45.01027281177291]">
                    <l-tile-layer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            layer-type="base"
                            name="OpenStreetMap"
                    ></l-tile-layer>
                    <div class="layer-main-block">
                        <div class="layer-wrapper">
                            <p class="layer-title">Layers</p>
                            <div class="layer-blocks">
                                <div class="layer-blocks-left">
                                    <div class="layer-block-left">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-left">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-left">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-left">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-left">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-left">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-left">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                </div>

                                <div class="layer-blocks-right">
                                    <div class="layer-block-right">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-right">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-right">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-right">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-right">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-right">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                    <div class="layer-block-right">
                                        <div class="layer-square"></div>
                                        <p class="layer-subtitle">Layer 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </l-map>
            </div>
        </div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
            zoom: 7,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/styles/map";
</style>