<script setup>
import { store } from "../store.js";
import { onMounted } from "vue";

// Monitor scrolling on last scene. At end of page, fade in "replay" icon.
function readyReplayIcon() {
    window.addEventListener("scroll", function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            const icon = document.querySelector(".replay-icon");
            icon.classList.add("fade");
        }
    });
}

onMounted(() => {
    // INTERSECTION OBSERVER: Fade in callouts when user scrolls them into view.
    const callouts = document.querySelectorAll(".content-box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                store.changeFullWidth(entry.target.id);

                // If it's the last scene, invoke function.
                if (entry.target.id === "10") {
                    readyReplayIcon();
                }
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
                <figure
                    class="replay-icon"
                    v-if="scene.sticky"
                    tabindex="0"
                    @click="store.replayScenes()"
                    @keydown.enter="store.replayScenes()"
                >
                    <img src="/images/replay-icon-24.svg" alt="replay icon">
                </figure>
            </div>
        </section>
</template>

<style scoped>
</style>