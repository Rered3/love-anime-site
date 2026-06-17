let audio;
let started = false;

/* 🎵 MUSIC SYSTEM */
function initMusic(){
    audio = document.getElementById("bgm");

    if(!audio) return;

    audio.loop = true;
    audio.volume = 0.5;

    document.body.addEventListener("click", startMusic);
}

function startMusic(){
    if(started) return;

    audio.play().then(()=>{
        started = true;
    });

    document.body.removeEventListener("click", startMusic);
}

/* 🌀 PAGE CHANGE */
function go(page){
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = page;
    }, 500);
}