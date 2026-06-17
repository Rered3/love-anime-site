let audio;
let started = false;

/* 🎵 MUSIC SYSTEM (cross page fix) */
function initMusic() {
    audio = document.getElementById("bgm");

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.5;

    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) audio.currentTime = savedTime;

    document.body.addEventListener("click", startMusic);
    window.addEventListener("beforeunload", saveMusic);
}

function startMusic() {
    if (started) return;

    audio.play().then(() => {
        started = true;
    }).catch(()=>{});

    document.body.removeEventListener("click", startMusic);
}

function saveMusic(){
    if (audio && !audio.paused) {
        localStorage.setItem("musicTime", audio.currentTime);
    }
}

/* 🌀 CAMERA ZOOM TRANSITION */
function goPage(page){
    document.body.classList.add("zoom-out");

    setTimeout(() => {
        window.location.href = page;
    }, 600);
}

/* 🌸 PARTICLES SYSTEM */
function spawnParticles(){
    const layer = document.querySelector(".particles");
    if (!layer) return;

    for(let i=0;i<30;i++){
        let p = document.createElement("div");
        p.className = "particle";
        p.innerHTML = "🌸";
        p.style.left = Math.random()*100 + "vw";
        p.style.animationDuration = (3 + Math.random()*5) + "s";
        layer.appendChild(p);
    }
}

/* 💓 HEARTBEAT SYNC (simple) */
function heartbeatSync(){
    const el = document.querySelector(".heartbeat");
    if (!el) return;

    setInterval(() => {
        el.classList.toggle("pulse");
    }, 600);
}

/* 🌙 TYPEWRITER TEXT */
function typeText(id, text, speed=40){
    let i=0;
    const el = document.getElementById(id);

    function typing(){
        if (i < text.length){
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}