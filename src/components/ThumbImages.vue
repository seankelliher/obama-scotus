<script setup>
import { store } from "../store.js";
</script>

<template>
    <div class="thumbs">
            <figure
                class="thumb tooltip"
                v-for="(thumb, index) in store.thumbs"
                :key="thumb.thumbScr"
                tabindex="0"
                @click="store.changeDisplay(index)"
                @keyup.enter="store.changeDisplay(index)"
            >
                <img
                    :src="`/images/${store.thumbs[index].thumbScr}.jpg`"
                    :alt="`${store.thumbs[index].thumbAlt}`"
                >
                <div
                    class="circle"
                    v-if="store.display === index"
                >
                    <img src="/images/check-circle-20.svg" alt="circle">
                </div>
                <figcaption hidden>{{ store.thumbs[index].caption }}</figcaption>
                <span class="tooltiptext">{{ store.thumbs[index].toolTip }}</span>
        </figure>
    </div>
</template>

<style scoped>
</style>