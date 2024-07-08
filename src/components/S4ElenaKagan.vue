<script setup>
import { store } from "../store.js";
</script>

<template>
        <section v-if="store.display === 4">
            <div class="sidebar">
                <h2>Elena Kagan</h2>
                <p>In May 2010, President Obama nominates Elena Kagan, the Solicitor General of the United States. She is confirmed and replaces retiring Justice John Paul Stevens. Kagan was a candidate to replace Justice Souter in 2009.</p>
            </div>

                <figure class="large">
                    <img src="/images/obama-meets-kagan.jpg" alt="Barack Obama interviews Elena Kagan">
                    <figcaption>President Obama meets with Elena Kagan, Apr. 30, 2010. Photo: Pete Souza</figcaption>
                </figure>
        </section>

</template>

<style scoped>
</style>