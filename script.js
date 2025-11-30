// List of available sounds (files must exist in /sounds/ folder)
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3"];

const buttonsContainer = document.getElementById("buttons");

// Create a button for each sound
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound.replace(".mp3", "");

    btn.addEventListener("click", () => {
        stopAllSounds();
        const audio = new Audio(`sounds/${sound}`);
        audio.play();
        window.currentAudio = audio;  
    });

    buttonsContainer.appendChild(btn);
});

// STOP BUTTON
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
    stopAllSounds();
});

buttonsContainer.appendChild(stopBtn);

// Helper to stop any playing audio
function stopAllSounds() {
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio.currentTime = 0;
    }
}
