<script setup>
import { store } from "../store.js";
</script>

<template>
    <div class="thumbs">
        <figure class="thumb tooltip" @click="store.changeDisplay(0)">
                <img src="/images/barack-obama-portrait.jpg" alt="portrait photo of Barack Obama as Senator">
            <figcaption hidden>Barack Obama. Photo: Pete Souza</figcaption>
            <span class="tooltiptext">Barack Obama</span>
        </figure>

        <figure class="thumb tooltip" @click="store.changeDisplay(1)">
                <img src="/images/john-roberts-portrait.jpg" alt="John Roberts in judicial robe">
            <figcaption hidden>John Roberts. Photo: Steve Petteway</figcaption>
            <span class="tooltiptext">John Roberts</span>
        </figure>

        <figure class="thumb tooltip" @click="store.changeDisplay(2)">
            <img src="/images/samuel-alito-portrait.jpg" alt="Samuel Alito in judicial robe">
            <figcaption hidden>Samuel Alito. Photo: Steve Petteway</figcaption>
            <span class="tooltiptext">Samuel Alito</span>
        </figure>

        <figure class="thumb tooltip" @click="store.changeDisplay(3)">
            <img src="/images/sonia-sotomayor-portrait.jpg" alt="Sonia Sotomayor in judicial robe">
            <figcaption hidden>Sonia Sotomayor. Photo: Steve Petteway</figcaption>
            <span class="tooltiptext">Sonia Sotomayor</span>
        </figure>

        <figure class="thumb tooltip" @click="store.changeDisplay(4)">
            <img src="/images/elena-kagan-portrait.jpg" alt="Elena Kagan in judicial robe">
            <figcaption hidden>Elena Kagan. Photo: Steve Petteway</figcaption>
            <span class="tooltiptext">Elena Kagan</span>
        </figure>

        <figure class="thumb tooltip" @click="store.changeDisplay(5)">
            <img src="/images/antonin-scalia-portrait.jpg" alt="Antonin Scalia in judicial robe">
            <figcaption hidden>Antonin Scalia. Photo: Steve Petteway</figcaption>
            <span class="tooltiptext">Antonin Scalia</span>
        </figure>

        <figure class="thumb tooltip" @click="store.changeDisplay(6)">
            <img src="/images/merrick-garland-portrait.jpg" alt="Merrick Garland in judicial robe">
            <figcaption hidden>Merrick Garland. Photo: Court of Appeals, DC Circuit</figcaption>
            <span class="tooltiptext">Merrick Garland</span>
        </figure>

        <figure class="thumb tooltip" @click="store.changeDisplay(7)">
            <img src="/images/mitch-mcconnell-portrait.jpg" alt="Mitch McConnell portrait">
            <figcaption hidden>Mitch McConnell. Photo: Senator's staff</figcaption>
            <span class="tooltiptext">Mitch McConnell</span>
        </figure>

        <figure class="thumb tooltip" @click="store.changeDisplay(8)">
            <img src="/images/neil-gorsuch-portrait.jpg" alt="Neil Gorsuch in judicial robe">
            <figcaption hidden>Neil Gorsuch. Photo: Franz Jantzen</figcaption>
            <span class="tooltiptext">Neil Gorsuch</span>
        </figure>
    </div>
</template>

<style scoped>
</style>