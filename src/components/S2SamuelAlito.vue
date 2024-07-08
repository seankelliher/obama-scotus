<script setup>
import { store } from "../store.js";
</script>
<template>
        <section v-if="store.display === 2">
            <div class="sidebar">
                <h2>Samuel Alito</h2>
                <p>In 2006, Senator Obama also opposes Bush's next Supreme Court nominee, Samuel Alito. Like Roberts, Alito is also confirmed.</p>
            </div>

                <figure class="large">
                    <img src="/images/bush-nominates-samuel-alito.jpg" alt="George Bush with Samuel Alito at his nomination announcement">
                    <figcaption>With President Bush, Samuel Alito acknowledges his nomination, Oct. 31, 2005. Photo: Paul Morse</figcaption>
                </figure>
        </section>
</template>

<style scoped>
</style>