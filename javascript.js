const menuIcon = document.querySelector(".fa-bars");
const dropMenu = document.querySelector(".dropMenu");

const fact1 = document.querySelector(".fact1");
const fact2 = document.querySelector(".fact2");
const fact3 = document.querySelector(".fact3");

const funFact1 = document.querySelector(".funFact1");
const funFact2 = document.querySelector(".funFact2");
const funFact3 = document.querySelector(".funFact3");

menuIcon.addEventListener("click", () => {
    funFact1.style.display = "none";
    fact1.classList.remove("rot");
    funFact2.style.display = "none";
    fact2.classList.remove("rot");
    funFact3.style.display = "none";
    fact3.classList.remove("rot");

    if (dropMenu.style.display === "flex") {
        dropMenu.style.display = "none";
    } else {
        dropMenu.style.display = "flex";
    }
})

fact1.addEventListener("click", () => {
    funFact2.style.display = "none";
    fact2.classList.remove("rot");
    funFact3.style.display = "none";
    fact3.classList.remove("rot");
    dropMenu.style.display = "none";

    fact1.classList.toggle("rot");
    if (funFact1.style.display === "flex") {
        funFact1.style.display = "none";
    } else {
        funFact1.style.display = "flex";
    }
})

fact2.addEventListener("click", () => {
    funFact1.style.display = "none";
    fact1.classList.remove("rot");
    funFact3.style.display = "none";
    fact3.classList.remove("rot");
    dropMenu.style.display = "none";

    fact2.classList.toggle("rot");
    if (funFact2.style.display === "flex") {
        funFact2.style.display = "none";
    } else {
        funFact2.style.display = "flex";
    }
})

fact3.addEventListener("click", () => {
    funFact2.style.display = "none";
    fact2.classList.remove("rot");
    funFact1.style.display = "none";
    fact1.classList.remove("rot");
    dropMenu.style.display = "none";

    fact3.classList.toggle("rot");
    if (funFact3.style.display === "flex") {
        funFact3.style.display = "none";
    } else {
        funFact3.style.display = "flex";
    }
})
