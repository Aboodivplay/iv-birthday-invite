// Set the date we're counting down to
const birthdayDate = new Date("April 5, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAY!";
    }
}, 1000);

// Audio Loop Handling
const video = document.getElementById("bg-video");
const btn = document.getElementById("unmute-btn");

btn.addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        btn.innerHTML = "🔇 Mute Sound";
    } else {
        video.muted = true;
        btn.innerHTML = "🔊 Enable Sound";
    }
});