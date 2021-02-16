import {createScene} from "./app/scenes.js";
import {fillCircle} from "./app/circles.js";

//When DOM loads, invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    createScene(0);//loads first scene (Obama with justices).

    //Get the figure.
    const figure = document.querySelector("figure");

    //Listen for clicks.
    figure.addEventListener("click", function () {

        //Get image, current scene.
        const img = document.querySelector("img");
        const currentScene = img.dataset.sceneNumber;

        //Get new scene (if last scene, get first).
        const newScene = (
            Number(currentScene) === 9
            ? (0)
            : (Number(currentScene) + 1)
        );

        //Invoke functions to create scene and fill circles.
        createScene(newScene);
        fillCircle(currentScene, newScene);
    });
});