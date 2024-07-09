<script setup>
import { store } from "../store.js";
</script>

<template>
    <div class="thumbs">
            <figure
                class="thumb tooltip"
                v-for="(thumb, index) in store.thumbs"
                :key="thumb.thumbScr"
                @click="store.changeDisplay(index)"
            >
                <img
                    :src="`/images/${store.thumbs[index].thumbScr}.jpg`"
                    :alt="`${store.thumbs[index].thumbAlt}`"
                >
                <figcaption hidden>{{ store.thumbs[index].caption }}</figcaption>
                <span class="tooltiptext">{{ store.thumbs[index].toolTip }}</span>
        </figure>
    </div>
</template>

<style scoped>
</style>