/* ====================================== */
/* MOBILE MENU */
/* ====================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ====================================== */
/* SMOOTH SCROLL REVEAL */
/* ====================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold:0.15
});


document.querySelectorAll(
".about-card, .skill-card, .project-card, .flip-card, .contact"
)

.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);
});


/* ====================================== */
/* NAVBAR SCROLL EFFECT */
/* ====================================== */

window.addEventListener("scroll", ()=>{

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "rgba(6,17,31,0.85)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.transition = "0.3s";

    }

    else{

        navbar.style.background = "rgba(255,255,255,0.06)";
    }

});


/* ====================================== */
/* TYPING EFFECT */
/* ====================================== */

const text = [
    "Future Software Developer",
    "Java Developer",
    "AI & Data Science Student",
    "Frontend Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-left h3").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(()=>{
            erase();
        },1500);

    }

    else{
        setTimeout(type,80);
    }
}


function erase(){

    letter = currentText.slice(0, --index);

    document.querySelector(".hero-left h3").textContent = letter;

    if(letter.length === 0){

        count++;
        setTimeout(type,300);
    }

    else{
        setTimeout(erase,40);
    }
}

type();


/* ====================================== */
/* FLOATING PARALLAX EFFECT */
/* ====================================== */

document.addEventListener("mousemove", (e)=>{

    const img = document.querySelector(".hero-right img");

    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;

    img.style.transform =
        `translate(${x}px, ${y}px)`;
});


/* ====================================== */
/* CARD HOVER GLOW EFFECT */
/* ====================================== */

const cards = document.querySelectorAll(
".skill-card, .project-card, .flip-card"
);

cards.forEach((card)=>{

    card.addEventListener("mouseenter", ()=>{

        card.style.transition = "0.3s";
    });

});