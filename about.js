let audio = document.getElementById("audio");
let progressBar = document.getElementById("progress-bar");
let playPauseBtn = document.getElementById("play-pause-btn");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.src = "pauseicon.png";
        playPauseBtn.alt = "Pause";
    } else {
        audio.pause();
        playPauseBtn.src = "playicon.png";
        playPauseBtn.alt = "Play";
    }
}

function updateProgressBar() {
    let percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percentage;
}

function seekAudio() {
    let seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
}

function resetAudioControls() {
    playPauseBtn.src = "playicon.png";
    playPauseBtn.alt = "Play";
    progressBar.value = 0;
}
