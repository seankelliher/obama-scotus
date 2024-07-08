<script setup>
import { store } from "../store.js";
</script>

<template>
        <section v-if="store.display === 6">
            <div class="sidebar">
                <h2>Merrick Garland</h2>
                <p>In March, Obama nominates Merrick Garland to fill Justice Scalia's empty seat. Garland is the Chief Judge of the US Court of Appeals for the District of Columbia Circuit.</p>
            </div>

                <figure class="large">
                    <img src="/images/obama-biden-nominate-garland.jpg" alt="Obama and Biden with Garland at his nomination announcement">
                    <figcaption>President Obama announces Merrick Garland's nomination, Mar. 16, 2016. Photo: Pete Souza</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>