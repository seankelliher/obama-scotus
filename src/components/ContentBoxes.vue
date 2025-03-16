<script setup>
import { store } from "../store.js";
import { onMounted } from "vue";

// Monitor scrolling on last scene. At end of page, fade in "replay" icon.
function readyReplayIcon() {
    window.addEventListener("scroll", function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            const icon = document.querySelector(".replay-box");
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
    }, { threshold: 0 });

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
            >   
                <div class="content-box-title">
                    <h2>{{ scene.contentTitle }}</h2>
                </div>
                <figure class="portrait">
                    <img :src="`images/${scene.portScr}.jpg`" :alt="`${scene.alt}`">
                    <figcaption>{{ scene.portCap }}</figcaption>
                </figure>
                <div class="content-box-text">
                    <p>
                        <span
                            v-if="scene.title !== ''"
                            class="emphasis"
                        >
                            {{ scene.title}}:&nbsp;
                        </span>
                        {{ scene.contentText }}
                    </p>
                </div>
                <div
                    class="replay-box"
                    v-if="scene.id === 10"
                >
                    <figure
                        class="replay-icon"
                        tabindex="0"
                        @click="store.replayScenes()"
                        @keydown.enter="store.replayScenes()"
                    >
                        <img src="/images/replay-icon-24.svg" alt="replay icon">
                        <figcaption>&nbsp;Watch again</figcaption>
                    </figure>
                </div>
            </div>

        </section>

</template>

<style scoped>
</style>