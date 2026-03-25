// Target Date: April 5, 2026
const targetDate = new Date("April 5, 2026 00:00:00").getTime();
const video = document.getElementById("bg-video");
const muteToggle = document.getElementById("mute-toggle");

// Timer Setup
const updateTimer = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
        document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
    }
};

setInterval(updateTimer, 1000);
updateTimer(); // Run immediately so it's not 00 on load

// Audio Toggle - The "Clickable" Fix
muteToggle.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        video.play();
        muteToggle.innerText = "🔇 MUTE AUDIO";
    } else {
        video.muted = true;
        muteToggle.innerText = "🔊 ENABLE AUDIO";
    }
});
