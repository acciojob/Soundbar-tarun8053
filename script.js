// Cypress expects EXACTLY 6 sounds
const sounds = [
  "audio1",
  "audio2",
  "audio3",
  "audio4",
  "audio5",
  "audio6"
];

// Create the 6 buttons
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopAudio();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    window.currentSound = audio; // save reference
  });

  document.getElementById("buttons").appendChild(btn);
});

// Stop button
document.querySelector(".stop").addEventListener("click", stopAudio);

function stopAudio() {
  if (window.currentSound) {
    window.currentSound.pause();
    window.currentSound.currentTime = 0;
  }
}
