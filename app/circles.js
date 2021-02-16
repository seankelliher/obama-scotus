function fillCircle(currentScene, newScene) {
    "use strict";

    //Form the id, needed to get the circles.
    const currentCircle = `circle${currentScene}`;
    const newCircle = `circle${newScene}`;

    //Get the circles.
    const reset = document.getElementById(currentCircle);
    const highlight = document.getElementById(newCircle);

    //Fill the circles.
    reset.setAttribute("fill", "#05C7F2"); //blue.
    highlight.setAttribute("fill", "#F23030"); //red.
}

export {fillCircle};