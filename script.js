const sounds = [
  "sound1",
  "sound2",
  "sound3",
  "sound4",
  "sound5",
  "sound6"
];

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`; // OR .wav if your files are wav
    audio.play();
    window.current = audio;
  });

  document.getElementById("buttons").appendChild(btn);
});

document.querySelector(".stop").addEventListener("click", stopSound);

function stopSound() {
  if (window.current) {
    window.current.pause();
    window.current.currentTime = 0;
  }
}
