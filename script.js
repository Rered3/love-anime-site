let audio;

/* 🎵 MUSIC START (must click once) */
function initMusic(){
    audio = document.getElementById("bgm");

    if(!audio) return;

    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
}

/* 🔐 UNLOCK SYSTEM */
function unlock(){
    let name = document.getElementById("name").value;

    if(name.toLowerCase() === "mubashira"){
        window.location.href = "letter.html";
    } else {
        alert("Wrong name 💔");
    }
}

/* ✍️ TYPEWRITER EFFECT */
function typeMessage(){
    let msg = "I never planned to fall for someone... but somehow, you became my favorite thought.";

    let i = 0;
    let el = document.getElementById("text");

    function typing(){
        if(i < msg.length){
            el.innerHTML += msg.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }

    typing();
}

/* ➡️ NEXT PAGE */
function goNext(){
    window.location.href = "final.html";
}