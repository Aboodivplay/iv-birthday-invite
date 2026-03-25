const targetDate = new Date("April 5, 2026 00:00:00").getTime();
const video = document.getElementById("bg-video");
const startBtn = document.getElementById("start-btn");
const entryScreen = document.getElementById("entry-screen");
const mainUI = document.getElementById("main-ui");
const muteToggle = document.getElementById("mute-toggle");

// This ensures the audio starts UNMUTED once they enter
startBtn.addEventListener("click", () => {
    video.muted = false; 
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
    video.muted = !video.muted;
    muteToggle.innerText = video.muted ? "🔊 UNMUTE SYSTEM" : "🔇 MUTE SYSTEM";
});
