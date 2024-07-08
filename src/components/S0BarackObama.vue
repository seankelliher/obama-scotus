<script setup>
import { store } from "../store.js";
</script>

<template>
        <section v-if="store.display === 0">
            <div class="sidebar">
                <h2>Barack Obama</h2>
                <p>As a Senator from Illinois and 44th President, Barack Obama worked to shape the Supreme Court. He both won and lost along the way.</p>
            </div>

                <figure class="large">
                    <img src="/images/obama-chats-with-justices.jpg" alt="Barack Obama chats with Supreme Court justices">
                    <figcaption>President-elect Barack Obama visits the Supreme Court, Jan. 14, 2009. Photo: Pete Souza</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>