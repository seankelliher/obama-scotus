import {nomineeInfo} from "./nominees.js";

function createScene(newScene) {
    "use strict";

    // Get elements.
    const panoImg = document.querySelector("#pano img");
    const hline = document.querySelector("#hline");
    const ptext = document.querySelector("#ptext");
    const thumbImg = document.querySelector("#thumb img");

    // Place images, attributes, or text.
    panoImg.src = `images/${nomineeInfo[newScene].panoImage}.jpg`;
    panoImg.alt = `${nomineeInfo[newScene].panoAlt}`;
    panoImg.dataset.sceneNumber = `${nomineeInfo[newScene].scene}`;
    hline.textContent = `${nomineeInfo[newScene].headline}`;
    ptext.textContent = `${nomineeInfo[newScene].paragraph}`;
    thumbImg.src = `images/${nomineeInfo[newScene].thumbImage}.png`;
    thumbImg.alt = `${nomineeInfo[newScene].thumbAlt}`;
}

export {createScene};