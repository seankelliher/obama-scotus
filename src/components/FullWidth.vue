<script setup>
import { store } from "../store.js";
</script>

<template>
    <div class="full-width-container">
        <div
            v-if="store.fullWidth === 0"
            class="full-width-title"
        >
            <h1>Barack Obama &amp; the Justices</h1>
        </div>
        <figure class="full-width">
            <img
                :src="`images/${store.scenes[store.fullWidth].fullSrc}.jpg`"
                :alt="`${store.scenes[store.fullWidth].fullAlt}`"
                class="full-width-img"
            >
            <figcaption class="full-width-caption">
                {{ store.scenes[store.fullWidth].fullCap }}
            </figcaption>

        </figure>
    </div>

</template>

<style scoped>
</style>