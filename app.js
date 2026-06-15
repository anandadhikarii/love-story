
// Reveal animation on scroll

const scenes = document.querySelectorAll(".scene");

function reveal() {

    scenes.forEach((scene) => {

        const windowHeight = window.innerHeight;
        const sceneTop = scene.getBoundingClientRect().top;
        const revealPoint = 120;

        if (sceneTop < windowHeight - revealPoint) {
            scene.classList.add("show");
        } else {
            scene.classList.remove("show");
        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Gallery animation

const images = document.querySelectorAll(".gallery img");

images.forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";
        img.style.transition = "0.4s";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// Floating hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = "0.7";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "transform 8s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(110vh) rotate(360deg)";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1200);

// Smooth music play (if browser allows)

window.addEventListener("click", () => {

    const music = document.querySelector("audio");

    if (music) {

        music.play().catch(() => {});

    }

}, { once: true });

// Ending animation

window.addEventListener("scroll", () => {

    const ending = document.querySelector(".ending");

    if (!ending) return;

    const top = ending.getBoundingClientRect().top;

    if (top < window.innerHeight - 200) {

        ending.style.transform = "scale(1.03)";
        ending.style.transition = "1s";

    }
});
// Love Counter
const start = new Date("2019-07-05T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now.getTime() - start.getTime();

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60)) % 24);

    const minutes = Math.floor((diff/(1000*60)) % 60);

    const seconds = Math.floor((diff/1000) % 60);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

updateCounter();

setInterval(updateCounter,1000);

// Play music after first click
document.addEventListener("click", function () {
    const music = document.getElementById("bgmusic");

    if (music.paused) {
        music.play();
    }
}, { once: true });

// Welcome Screen

const startBtn = document.getElementById("startBtn");

if(startBtn){

startBtn.addEventListener("click",function(){

document.getElementById("welcome").style.display="none";

const music=document.getElementById("bgmusic");

if(music){

music.play();

}

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}



