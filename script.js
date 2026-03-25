// Target Date: April 5, 2026
const targetDate = new Date("April 5, 2026 00:00:00").getTime();

const updateTimer = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    // If the birthday arrives
    if (diff <= 0) {
        clearInterval(updateTimer);
        document.getElementById("countdown").innerHTML = "<h1>HAPPY BIRTHDAY! 🎂</h1>";
        return;
    }

    // Calculation for Days, Hours, Mins, Secs
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the UI
    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
}, 1000);

// Video and Audio Control
const video = document.getElementById("bg-video");
const btn = document.getElementById("unmute-btn");

btn.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        video.play(); // Force play on click just in case
        btn.innerHTML = "🔇 Mute Audio";
    } else {
        video.muted = true;
        btn.innerHTML = "🔊 Enable Audio";
    }
});
