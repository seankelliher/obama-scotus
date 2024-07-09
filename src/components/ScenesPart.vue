<script setup>
import { store } from "../store.js";
</script>

<template>
        <section>
            <div class="sidebar">
                <h2>{{ store.scenes[store.display].heading }}</h2>
                <p>{{ store.scenes[store.display].para }}</p>
            </div>

                <figure class="large">
                    <img :src="`/images/${store.scenes[store.display].imgScr}.jpg`" :alt="`${store.scenes[store.display].imgAlt}`">
                    <figcaption>{{ store.scenes[store.display].caption }}</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>