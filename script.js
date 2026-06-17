/* 🌌 SKY EFFECT */
function createSky() {
    const sky = document.querySelector(".sky");
    if (!sky) return;

    // stars
    for (let i = 0; i < 80; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 5 + 3) + "s";
        sky.appendChild(star);
    }

    // blossoms
    for (let i = 0; i < 30; i++) {
        let b = document.createElement("div");
        b.className = "blossom";
        b.innerHTML = "🌸";
        b.style.left = Math.random() * 100 + "vw";
        b.style.animationDuration = (Math.random() * 6 + 4) + "s";
        sky.appendChild(b);
    }
}

/* 🎵 MUSIC */
function startMusic() {
    const m = document.getElementById("bgm");
    if (m) {
        m.volume = 0.5;
        m.play().catch(()=>{});
    }
}

/* 💌 TYPEWRITER */
function typeWriter(text, id, speed = 50) {
    let i = 0;
    let el = document.getElementById(id);

    function run() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(run, speed);
        }
    }
    run();
}