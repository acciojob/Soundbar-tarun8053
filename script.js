// List of sound file names (without folder)
const sounds = [
  "clap",
  "kick",
  "snare",
  "hihat",
  "tom"
];

// Get buttons container
const btnContainer = document.getElementById("buttons");

// Create the audio + button for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound.toUpperCase();

  // On click → play sound
  btn.addEventListener("click", () => {
    stopAll(); // stop any currently playing sound
    const audio = document.getElementById(sound);
    audio.play();
  });

  // Create <audio> tag
  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`;

  // Add button & audio to page
  btnContainer.appendChild(btn);
  document.body.appendChild(audio);
});

// STOP BUTTON
document.getElementById("stop").addEventListener("click", stopAll);

// Function to stop ALL sounds
function stopAll() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
