//your JS code here. If required.
// List of sound files
const sounds = ["clap", "kick", "snare", "tom", "boom"];

// Create buttons dynamically
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSounds();
        const audio = document.createElement("audio");
        audio.src = `sounds/${sound}.wav`;
        audio.play();
        window.currentAudio = audio; // save last playing audio
    });

    document.getElementById("buttons").appendChild(btn);
});

// STOP button functionality
document.querySelector(".stop").addEventListener("click", () => {
    stopSounds();
});

function stopSounds() {
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio.currentTime = 0;
    }
}
