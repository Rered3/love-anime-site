let audio;
let started = false;

function initMusic() {
    audio = document.getElementById("bgm");
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.5;

    // restore time (music continuity across pages)
    const saved = localStorage.getItem("musicTime");
    if (saved) audio.currentTime = saved;

    document.body.addEventListener("click", startMusic);
    window.addEventListener("beforeunload", saveTime);
}

function startMusic() {
    if (started) return;

    audio.play().then(() => {
        started = true;
    }).catch(()=>{});

    document.body.removeEventListener("click", startMusic);
}

function saveTime(){
    if (audio && !audio.paused) {
        localStorage.setItem("musicTime", audio.currentTime);
    }
}

/* 🌀 PAGE NAVIGATION */
function goPage(page){
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = page;
    }, 600);
}