"use strict";


// Choose Call Phone


const firstIcon = document.querySelector(".star"),
      secondIcon = document.querySelector(".time"),
      thirdIcon = document.querySelector(".contact"),
      fourhdIcon = document.querySelector(".keypad"),
      fifthIcon = document.querySelector(".voice");


// .active-color ===> active CLASS

firstIcon.addEventListener("click", () => {
    firstIcon.setAttribute("id", "active-color");
    secondIcon.setAttribute("id", "");
    thirdIcon.setAttribute("id", "");
    fourhdIcon.setAttribute("id", "");
    fifthIcon.setAttribute("id", "");
})

firstIcon.addEventListener("click", () => {
    firstIcon.setAttribute("id", "active-color");
    secondIcon.setAttribute("id", "");
    thirdIcon.setAttribute("id", "");
    fourhdIcon.setAttribute("id", "");
    fifthIcon.setAttribute("id", "");
})

secondIcon.addEventListener("click", () => {
    secondIcon.setAttribute("id", "active-color");
    firstIcon.setAttribute("id", "");
    thirdIcon.setAttribute("id", "");
    fourhdIcon.setAttribute("id", "");
    fifthIcon.setAttribute("id", "");
})

thirdIcon.addEventListener("click", () => {
    thirdIcon.setAttribute("id", "active-color");
    secondIcon.setAttribute("id", "");
    firstIcon.setAttribute("id", "");
    fourhdIcon.setAttribute("id", "");
    fifthIcon.setAttribute("id", "");
})

fourhdIcon.addEventListener("click", () => {
    fourhdIcon.setAttribute("id", "active-color");
    secondIcon.setAttribute("id", "");
    thirdIcon.setAttribute("id", "");
    firstIcon.setAttribute("id", "");
    fifthIcon.setAttribute("id", "");
});

fifthIcon.addEventListener("click", () => {
    fifthIcon.setAttribute("id", "active-color");
    secondIcon.setAttribute("id", "");
    thirdIcon.setAttribute("id", "");
    fourhdIcon.setAttribute("id", "");
    firstIcon.setAttribute("id", "");
})


const btn1 = document.querySelector("#btn-1"),
      btn2 = document.querySelector("#btn-2");


btn1.addEventListener("click", () => {
    btn1.classList.add("active");
    btn2.classList.remove("active");
});

btn2.addEventListener("click", () => {
    btn2.classList.add("active");
    btn1.classList.remove("active");
});

