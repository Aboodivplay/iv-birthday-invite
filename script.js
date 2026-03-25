const targetDate = new Date("April 5, 2026 00:00:00").getTime();
const video = document.getElementById("bg-video");
const startBtn = document.getElementById("start-btn");
const muteToggle = document.getElementById("mute-toggle");
const entryScreen = document.getElementById("entry-screen");
const mainContent = document.getElementById("main-content");

// Start Invitation & Unmute
startBtn.addEventListener("click", () => {
    video.muted = false;
    video.play();
    entryScreen.style.fadeOut = "slow"; // Visual polish
    entryScreen.style.display = "none";
    mainContent.style.display = "flex";
});

// Toggle Sound
muteToggle.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        muteToggle.innerText = "静 Mute Audio";
    } else {
        video.muted = true;
        muteToggle.innerText = "🔊 Enable Audio";
    }
});

// Timer Logic
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>HAPPY BIRTHDAY!</h2>";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
}, 1000);
