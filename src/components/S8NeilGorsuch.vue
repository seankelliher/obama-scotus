<script setup>
import { store } from "../store.js";
</script>

<template>
        <section v-if="store.display === 8">
            <div class="sidebar">
                <h2>Neil Gorsuch</h2>
                <p>Donald Trump wins the 2016 presidential election and nominates Judge Neil Gorsuch of the U.S. Court of Appeals for the Tenth Circuit. Gorsuch is confirmed by a vote of 54–45 and assumes Justice Scalia's seat in April 2017.</p>
            </div>

                <figure class="large">
                    <img src="/images/trump-nominates-gorsuch.jpg" alt="Trump with Neil Gorsuch at his nomination announcement">
                    <figcaption>President Trump nominates Neil Gorsuch, Jan. 31, 2017. Photo: White House staff</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>