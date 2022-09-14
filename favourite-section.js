"use strict";

const backBtn = document.querySelector(".back-icon"),
      addIcon = document.querySelector(".add-icon"),
      swipeBottom = document.querySelector(".bottom-swipe"),
      activeBtn = document.querySelector(".swipe-top-btn"),
      input = document.querySelector("#search"),
      topBack = document.querySelector(".top-back");



backBtn.addEventListener("click", () => {
    gsap.to(swipeBottom, {
        y: 200,
        scale: 0,
        duration: .6,
    });

    gsap.to (activeBtn, {
        scale: 0,
        duration: .2,
    });
});

addIcon.addEventListener("click", () => {
    gsap.to(swipeBottom, {
        y: 0,
        scale: 1,
        duration: .6,
    });
});

activeBtn.setAttribute("style", "transform: scale(0)")

input.addEventListener("click", () => {
    gsap.to (activeBtn, {
        scale: 1,
        duration: .2,
    });
});


activeBtn.addEventListener("click", () => {
    gsap.to(swipeBottom, {
        y: 200,
        scale: 0,
        duration: .6,
    });
})