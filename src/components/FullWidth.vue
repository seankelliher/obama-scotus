<script setup>
import { store } from "../store.js";
</script>

<template>
    <div class="full-width-container">
        <div
            v-if="store.fullWidth === 0"
            class="full-width-title"
        >
            <h1>Nominees</h1>
        </div>
        <figure class="full-width">
            <picture>
                <source
                    :srcset="`images/${store.scenes[store.fullWidth].fullSrc}-lg.jpg`"
                    media="(min-width: 800px)"
                >
                <source
                    :srcset="`images/${store.scenes[store.fullWidth].fullSrc}-md.jpg`"
                    media="(min-width: 500px)"
                >
                <source
                    :srcset="`images/${store.scenes[store.fullWidth].fullSrc}-sm.jpg`"
                    media="(min-width: 300px)"
                >
                <img
                    :src="`images/${store.scenes[store.fullWidth].fullSrc}-lg.jpg`"
                    :alt="`${store.scenes[store.fullWidth].fullAlt}`"
                    class="full-width-img"
                >  
            </picture>

            <figcaption class="full-width-caption">
                {{ store.scenes[store.fullWidth].fullCap }}
            </figcaption>
        </figure>
    </div>
</template>

<style scoped>
</style>