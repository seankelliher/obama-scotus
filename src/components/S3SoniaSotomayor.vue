<script setup>
import { store } from "../store.js";
</script>
<template>
        <section v-if="store.display === 3">
            <div class="sidebar">
                <h2>Sonia Sotomayor</h2>
                <p>In May 2009, now President Obama nominates Sonia Sotomayor of the US Court of Appeals for the Second Circuit. She is confirmed and replaces retiring Justice David H. Souter. Sotomayor was among four finalists; all women.</p>
            </div>

                <figure class="large">
                    <img src="/images/obama-biden-meet-sotomayor.jpg" alt="Barack Obama and Joe Biden interview Sonia Sotomayor">
                    <figcaption>Nominee Sonia Sotomayor meets with President Obama, May 26, 2009. Photo: Pete Souza</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>