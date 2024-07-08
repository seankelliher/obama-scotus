<script setup>
import { store } from "../store.js";
</script>
<template>
        <section v-if="store.display === 1">
            <div class="sidebar">
                <h2>John Roberts</h2>
                <p>In 2005, Senator Obama opposes George W. Bush's Supreme Court nominee John Roberts. Roberts is confirmed anyway and later becomes Chief Justice.</p>
            </div>

                <figure class="large">
                    <img src="/images/john-roberts-sworn-in.jpg" alt="John Roberts sworn in as a Supreme Court justice">
                    <figcaption>John Roberts is sworn-in as the 17th Chief Justice, Sep. 29, 2005. Photo: Paul Morse</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>