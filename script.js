const targetDate = new Date("April 5, 2026 00:00:00").getTime();
const video = document.getElementById("bg-video");
const startBtn = document.getElementById("start-btn");
const entryScreen = document.getElementById("entry-screen");
const mainUI = document.getElementById("main-ui");
const muteToggle = document.getElementById("mute-toggle");

// 1. CLICK TO WAKE UP VIDEO AND AUDIO
startBtn.addEventListener("click", () => {
    video.style.display = "block"; // Make video visible
    video.muted = false; // Turn sound on
    
    // Force the video to load and play
    video.load(); 
    video.play().then(() => {
        entryScreen.style.display = "none";
        mainUI.style.display = "flex";
    }).catch(error => {
        // Fallback if video fails to play
        console.error("Video play failed:", error);
        entryScreen.style.display = "none";
        mainUI.style.display = "flex";
    });
});

// 2. TIMER LOGIC
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

// 3. MUTE TOGGLE
muteToggle.addEventListener("click", () => {
    video.muted = !video.muted;
    muteToggle.innerText = video.muted ? "🔊 UNMUTE SYSTEM" : "🔇 MUTE SYSTEM";
});
