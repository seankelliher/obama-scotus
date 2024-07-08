<script setup>
import { store } from "../store.js";
</script>

<template>
        <section v-if="store.display === 7">
            <div class="sidebar">
                <h2>Mitch McConnell</h2>
                <p>But Senate Majority Leader Mitch McConnell refuses to hold a confirmation hearing, citing Obama's final year in office. Judge Garland's nomination remains open for 293 days, expiring on January 3, 2017, as the 114th Congress closes.</p>
            </div>

                <figure class="large">
                    <img src="/images/us-capitol-building.jpg" alt="exterior of the United States Capitol building">
                    <figcaption>The United States Capitol. Photo: Greg Willis</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>