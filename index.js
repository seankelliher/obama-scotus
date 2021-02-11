import {createScene} from "./app/scenes.js";

//When DOM loads, invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let count;
    count = 0;
    createScene(count);//loads first scene (Obama with justices).

    //Get the figure.
    const figure = document.querySelector("figure");

    //Listen for clicks.
    figure.addEventListener("click", function () {
        count = count + 1;
        createScene(count);
    });
});