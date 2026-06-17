let music;

function initMusic() {
    music = document.getElementById("bgm");
    if (!music) return;

    music.loop = true;
    music.volume = 0.5;

    document.body.addEventListener("click", startMusicOnce);
}

function startMusicOnce() {
    if (!music) return;

    music.play().catch(()=>{});
    document.body.removeEventListener("click", startMusicOnce);
}

// 🌀 PAGE TRANSITION
function goPage(page){
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = page;
    }, 600);
}

// 🌸 SIMPLE SKY BLOSSOMS (LIGHTWEIGHT)
function createBlossoms(){
    const sky = document.querySelector(".sky");
    if (!sky) return;

    for(let i=0;i<20;i++){
        let b = document.createElement("div");
        b.className = "blossom";
        b.innerHTML = "🌸";
        b.style.left = Math.random()*100 + "vw";
        b.style.animationDuration = (4 + Math.random()*4) + "s";
        sky.appendChild(b);
    }
}