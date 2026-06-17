// 🎵 AUDIO SYSTEM (FIXED FOR MOBILE)
let musicStarted = false;

function startMusic() {
    if (musicStarted) return;

    const audio = document.getElementById("bgm");
    if (!audio) return;

    audio.volume = 0.6;
    audio.play().catch(() => {});
    musicStarted = true;
}

// 🌌 SKY SYSTEM (LIGHTWEIGHT)
function createSky() {
    const sky = document.querySelector(".sky");
    if (!sky) return;

    for (let i = 0; i < 40; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDuration = (3 + Math.random() * 5) + "s";
        sky.appendChild(star);
    }

    for (let i = 0; i < 15; i++) {
        const b = document.createElement("div");
        b.className = "blossom";
        b.innerHTML = "🌸";
        b.style.left = Math.random() * 100 + "vw";
        b.style.animationDuration = (5 + Math.random() * 5) + "s";
        sky.appendChild(b);
    }
}

// 💌 TYPEWRITER
function typeWriter(text, elId, speed = 40) {
    let i = 0;
    const el = document.getElementById(elId);

    function run() {
        if (i < text.length) {
            el.innerHTML += text[i];
            i++;
            setTimeout(run, speed);
        }
    }
    run();
}

// 🌀 SCENE TRANSITION (ZOOM EFFECT)
function goScene(url) {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = url;
    }, 700);
}