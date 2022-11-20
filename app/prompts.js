function showPrompt(newScene) {
    "use strict";

    // Get the "next" and "replay" icons.
    const next = document.getElementById("next");
    const replay = document.getElementById("replay");

    // Check scene number. Make icon ivisible or fade it in.
    if (newScene === 0) {
        next.className = "fade-in";
        replay.className = "invisible";

    } else if (newScene === 9) {
        next.className = "invisible";
        replay.className = "fade-in";

    } else {
        next.className = "visible";
        replay.className = "invisible";
    }
}

export {showPrompt};