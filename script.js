const targetDate = new Date("April 5, 2026 00:00:00").getTime();
const video = document.getElementById("bg-video");
const startBtn = document.getElementById("start-btn");
const entryScreen = document.getElementById("entry-screen");
const mainUI = document.getElementById("main-ui");

// 1. The MAGIC FIX for sound and background
startBtn.addEventListener("click", () => {
    video.muted = false; // Now allowed because user clicked
    video.play();
    entryScreen.style.display = "none";
    mainUI.style.display = "flex";
});

// 2. Timer Update
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
