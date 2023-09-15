<script setup>
import { scenes } from "../data/scenes.js";
import { ref, onMounted } from "vue";

const count = ref(0);
const isFade = ref(true);

onMounted(() => {
    scenes[count];
});
</script>

<template>
    <div class="container">

        <figure class="pano">
            <img
                :src="`images/${scenes[count].panoImage}.jpg`"
                :alt="`${scenes[count].panoAlt}`"
            >

            <div
                class="pano-icon"
                tabindex="0"
                v-if="count === scenes.length - 1"
                @click="count = 0"
                :class="{ fade: isFade }"
            >
                <img src="/images/replay-icon-24.svg" alt="replay icon">
            </div>

            <div
                class="pano-icon"
                tabindex="0"
                v-if="count !== scenes.length - 1"
                @click="count++"
                :class="{ fade: isFade }"
            >
                <img src="/images/forward-arrow-icon-24.svg" alt="next icon">
            </div>
        </figure>

        <main>
            <section>
                <h2 id="hline">{{ scenes[count].headline }}</h2>
                <p id="ptext">{{ scenes[count].paragraph }}</p>
            </section>

            <figure class="thumb">
                <img
                    :src="`images/${scenes[count].thumbImage}.jpg`"
                    :alt="`${scenes[count].thumbAlt}`"
                >
            </figure>

            <nav>
                <img
                    class="nav-icon"
                    @click="[count === 0 ? count = '' : count--]"
                    src="/images/chevron-left-icon-24.svg"
                    alt="previous icon"
                >
                <p>Scene {{ count + 1 }} of {{ scenes.length }}</p>
                <img
                    class="nav-icon"
                    @click="[count === scenes.length - 1 ? '' : count++]"
                    src="/images/chevron-right-icon-24.svg"
                    alt="next icon"
                >
            </nav>
        </main>
    </div>
</template>
