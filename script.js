const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });
});

stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
    }
});