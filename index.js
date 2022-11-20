import {createScene} from "./app/scenes.js";
import {fillCircle} from "./app/circles.js";
import {showPrompt} from "./app/prompts.js";

// When DOM loads, invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Load first scene (Obama with justices).
    createScene(0);
    showPrompt(0);

    // Get the "next" button (works for "replay" button too), listen for clicks.
    const next = document.getElementById("next");
    next.addEventListener("click", function () {

        // Get image, current scene.
        const panoImg = document.querySelector("#pano img");
        const currentScene = panoImg.dataset.sceneNumber;

        // Get new scene (if last scene, get first).
        const newScene = (
            Number(currentScene) === 9
                ? (0)
                : (Number(currentScene) + 1)
        );

        // Invoke functions to create scene and fill circles.
        createScene(newScene);
        fillCircle(currentScene, newScene);
        showPrompt(newScene);
    });

    // Get the svg element #circles-sm, listen for clicks.
    const circles = document.getElementById("circles-sm");
    circles.addEventListener("click", function (event) {

        if (event.target.nodeName === "circle") {

            // Get image, current scene.
            const panoImg = document.querySelector("#pano img");
            const currentScene = panoImg.dataset.sceneNumber;

            // Get new scene (based on what user clicked).
            const newScene = Number(event.target.id.substring(6, 7));

            // Invoke functions to create scene and fill circles.
            createScene(newScene);
            fillCircle(currentScene, newScene);
        }
    });
});