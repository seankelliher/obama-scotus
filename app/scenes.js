import {nomineeInfo} from "./nominees.js";

function createScene(newScene) {
    "use strict";

    //Get elements.
    const img = document.querySelector("img");
    const hline = document.querySelector("#hline");
    const ptext = document.querySelector("#ptext");
    const section = document.querySelector("section");

    //Place images, attributes, or text.
    img.src = `images/${nomineeInfo[newScene].image}.jpg`;
    img.alt = `${nomineeInfo[newScene].alt}`;
    img.dataset.sceneNumber = `${nomineeInfo[newScene].scene}`;
    hline.textContent = `${nomineeInfo[newScene].headline}`;
    ptext.textContent = `${nomineeInfo[newScene].paragraph}`;

    //Place position.
    section.id = `${nomineeInfo[newScene].position}`;
}

export {createScene};