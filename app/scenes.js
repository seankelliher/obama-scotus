import {nomineeInfo} from "./nominees.js";

function createScene(newScene) {
    "use strict";

    //Get elements.
    const img = document.querySelector("img");
    const htag = document.querySelector("h2");
    const ptag = document.querySelector("p");
    const section = document.querySelector("section");

    //Place images, attributes, or text.
    img.src = `images/${nomineeInfo[newScene].image}.jpg`;
    img.alt = `${nomineeInfo[newScene].alt}`;
    img.dataset.sceneNumber = `${nomineeInfo[newScene].scene}`;
    htag.textContent = `${nomineeInfo[newScene].headline}`;
    ptag.textContent = `${nomineeInfo[newScene].paragraph}`;

    //Place position.
    section.id = `${nomineeInfo[newScene].position}`;
}

export {createScene};