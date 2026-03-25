const targetDate = new Date("April 5, 2026 00:00:00").getTime();
const video = document.getElementById("bg-video");
const audio = document.getElementById("bg-audio");
const startBtn = document.getElementById("start-btn");
const entryScreen = document.getElementById("entry-screen");
const mainUI = document.getElementById("main-ui");
const muteToggle = document.getElementById("mute-toggle");

startBtn.addEventListener("click", () => {
    // Sync the audio to the video and play both
    audio.currentTime = video.currentTime;
    audio.play();
    video.play();
    
    entryScreen.style.display = "none";
    mainUI.style.display = "flex";
});

function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) return;

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();

muteToggle.addEventListener("click", () => {
    if (audio.muted) {
        audio.muted = false;
        muteToggle.innerText = "🔇 MUTE SYSTEM";
    } else {
        audio.muted = true;
        muteToggle.innerText = "🔊 UNMUTE SYSTEM";
    }
});
