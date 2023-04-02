// Makes circle red when its scene displays.
// Returns circle to blue when its scene no longer displays.
function fillCircle(currentScene, newScene) {
    "use strict";

    // Form the id, needed to get the circles.
    const currentCircle = `circle${currentScene}`;
    const newCircle = `circle${newScene}`;

    // Get the circles.
    const reset = document.getElementById(currentCircle);
    const highlight = document.getElementById(newCircle);

    // Fill the circles.
    reset.setAttribute("fill", "#020659"); // dark purple.
    highlight.setAttribute("fill", "#f23005"); // orange.
}

export {fillCircle};