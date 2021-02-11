import {nomineeInfo} from "./nominees.js";

function createScene(count) {
    "use strict";

    //Get elements.
    const img = document.querySelector("img");
    const htag = document.querySelector("h2");
    const ptag = document.querySelector("p");
    const section = document.querySelector("section");

    //Place images, attributes, or text.
    img.src = `images/${nomineeInfo[count].image}.jpg`;
    img.alt = `${nomineeInfo[count].alt}`;
    htag.textContent = `${nomineeInfo[count].headline}`;
    ptag.textContent = `${nomineeInfo[count].paragraph}`;

    //Place position.
    section.id = `${nomineeInfo[count].position}`;
}

export {createScene};