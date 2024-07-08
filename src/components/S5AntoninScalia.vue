<script setup>
import { store } from "../store.js";
</script>
<template>

        <section v-if="store.display === 5">
            <div class="sidebar">
                <h2>Antonin Scalia</h2>
                <p>In February of 2016, Justice Antonin Scalia is found dead while vacationing at Cibolo Creek Ranch near Marfa, Texas. His death leads to an epic battle to fill the empty seat.</p>
            </div>

                <figure class="large">
                    <img src="/images/antonin-scalia-ranch.jpg" alt="Cibolo Creek Ranch resort buildings at nighfall">
                    <figcaption>The Cibolo Creek Ranch in Presidio County, Texas. Photo: Jon Hanson</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>