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

            <figure
                v-if="count === scenes.length - 1"
                class="pano-icon"
                :class="{ fade: isFade }"
                tabindex="0"
                @click="count = 0"
                @keyup.enter="count = 0"

            >
                <img src="/images/replay-icon-24.svg" alt="replay icon">
            </figure>

            <figure
                v-if="count !== scenes.length - 1"
                class="pano-icon"
                :class="{ fade: isFade }"
                tabindex="0"
                @click="count++"
                @keyup.enter="count++"
            >
                <img src="/images/forward-arrow-icon-24.svg" alt="next icon">
            </figure>
        </figure>

        <main>
            <section>
                <h2 id="hline">{{ scenes[count].headline }}</h2>
                <p id="ptext">{{ scenes[count].paragraph }}</p>
            </section>

            <aside>    
                <figure class="thumb">
                    <img
                        :src="`images/${scenes[count].thumbImage}.jpg`"
                        :alt="`${scenes[count].thumbAlt}`"
                    >
                </figure>
                
                <nav>
                    <img
                        class="nav-icon"
                        tabindex="0"
                        @click="[count !== 0 ? count-- : '']"
                        @keyup.enter="[count !== 0 ? count-- : '']"
                        src="/images/chevron-left-icon-24.svg"
                        alt="previous icon"
                    >
                    <p>{{ count + 1 }} of {{ scenes.length }}</p>
                    <img
                        class="nav-icon"
                        tabindex="0"
                        @click="[count !== scenes.length - 1 ? count++ : '']"
                        @keyup.enter="[count !== scenes.length - 1 ? count++ : '']"
                        src="/images/chevron-right-icon-24.svg"
                        alt="next icon"
                    >
                </nav>
            </aside>
        </main>
    </div>
</template>
