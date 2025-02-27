<script setup>
import { store } from "../store.js";
import { onMounted } from "vue";

onMounted(() => {
    // Fades in callouts when user scrolls them into view.
    const callouts = document.querySelectorAll(".content-box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                /* const contains = entry.target.classList.contains("fade-in");
                if (!contains) {
                    entry.target.classList.add("fade-in");
                } */
                store.changeFullWidth(entry.target.id);
            }
        });
    }, { threshold: 0.5 });

    callouts.forEach(callout => observer.observe(callout));
});
</script>

<template>
        <section
            v-for="scene in store.scenes"
            :key="scene.id"
        >
            <div
                :id="`${scene.id}`"
                class="content-box"
                :class="{ sticky: scene.sticky }"
            >
                <figure class="portrait">
                    <img :src="`images/${scene.portScr}.jpg`" :alt="`${scene.alt}`">
                    <figcaption>{{ scene.portCap }}</figcaption>
                </figure>
                <div class="content-box-text">
                    <h2>{{ scene.contentTitle }}</h2>
                    <p>{{ scene.contentText }}</p>
                </div>
            </div>
        </section>
</template>

<style scoped>
</style>