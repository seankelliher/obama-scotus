<script setup>
import { scenes } from "../data/scenes.js";
import { ref, onMounted } from "vue";

const count = ref(0);
const isFade = ref(true);

onMounted(() => {
    scenes[count];
});

function checkCount(action) {
    if (action === "decrement") {
        if (count.value !== 0) {
            count.value = count.value - 1;
        } else if (count.value === 0) {
            count.value = 9; // If adding/removing scenes, adjust count.value.
        }
    } else if (action === "increment") {
        if (count.value !== 9) {
            count.value = count.value + 1;
        } else if (count.value === 9) {
            count.value = 0;
        } 
    }
}
</script>

<template>
    <div class="container">
        <nav>
            {{ count + 1 }} of {{ scenes.length }}
            <button
                class="nav-icon"
                @click="checkCount('decrement')"
            >
                <img src="/images/chevron-left-icon-24.svg" alt="previous icon">  
            </button>

             <button
                class="nav-icon"
                @click="checkCount('increment')"
            >
                <img src="/images/chevron-right-icon-24.svg" alt="next icon">
            </button>
        </nav>

        <div class="pano-container">
            <figure class="pano">
                <img
                    :src="`images/${scenes[count].panoImage}.jpg`"
                    :alt="`${scenes[count].panoAlt}`"
                >
                <figcaption>{{ scenes[count].panoCaption }}</figcaption>
            </figure>

            <button
                v-if="count === 9"
                class="pano-icon"
                :class="{ fade: isFade }"
                @click="checkCount('increment')"
            >
                <img src="/images/replay-icon-24.svg" alt="replay icon">
            </button>

            <button
                v-if="count !== 9"
                class="pano-icon"
                :class="{ fade: isFade }"
                @click="checkCount('increment')"
            >
                <img src="/images/forward-arrow-icon-24.svg" alt="next icon">
            </button>
        </div>

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
                    <figcaption>{{ scenes[count].thumbCaption }}</figcaption>
                </figure>
            </aside>
        </main>
    </div>
</template>