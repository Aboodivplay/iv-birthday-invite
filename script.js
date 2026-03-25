const video = document.getElementById("bg-video");
const startBtn = document.getElementById("start-btn");
const entryScreen = document.getElementById("entry-screen");
const mainUI = document.getElementById("main-ui");

startBtn.addEventListener("click", () => {
    // This is the sequence that kills the black screen
    video.muted = false; 
    video.play().then(() => {
        entryScreen.style.display = "none";
        mainUI.style.display = "flex";
    }).catch(err => {
        console.log("Video play failed, forcing display anyway");
        entryScreen.style.display = "none";
        mainUI.style.display = "flex";
    });
});
