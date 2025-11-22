// List of sound files present in SAME folder
const sounds = ["clap", "kick", "snare", "hihat", "tom"];

// Reference to buttons section
const btnContainer = document.getElementById("buttons");

// Create a button for each sound
sounds.forEach(sound => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = sound.toUpperCase();

    // Create audio object
    const audio = new Audio(`${sound}.mp3`);

    // play on click
    button.addEventListener("click", () => {
        stopAll();
        audio.play();
    });

    btnContainer.appendChild(button);
});

// STOP functionality
document.getElementById("stop").addEventListener("click", stopAll);

// Stops all currently playing sounds
function stopAll() {
    sounds.forEach(sound => {
        const audio = new Audio(`${sound}.mp3`);
        audio.pause();
        audio.currentTime = 0;
    });
}
