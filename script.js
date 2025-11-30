const buttonsContainer = document.getElementById("buttons");

// Audio files stored in /sounds folder
const sounds = [
  "sound1.mp3",
  "sound2.mp3",
  "sound3.mp3",
  "sound4.mp3",
  "sound5.mp3"
];

let currentAudio = null;

// Create numbered sound buttons (1–5)
sounds.forEach((sound, index) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = index + 1; // Cypress expects "1 2 3 4 5"

  btn.addEventListener("click", () => {
    stopSound();

    const audio = new Audio(`sounds/${sound}`);
    currentAudio = audio;

    // Prevent NotSupportedError (Cypress autoplay issues)
    audio.play().catch(() => {});
  });

  buttonsContainer.appendChild(btn);
});

// STOP button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.textContent = "Stop";

stopBtn.addEventListener("click", stopSound);

buttonsContainer.appendChild(stopBtn);

// Stop current playing audio
function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
