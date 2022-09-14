"use strict";


const btn = document.querySelectorAll("div"),
    display = document.querySelector(".first-display"),
    display2 = document.querySelector(".phone-line"),
    secondScreen = document.querySelector("#secondScreen"),
    thirdScreen = document.querySelector("#thirdScreen"),
    fourthdScreen = document.querySelector("#fourthdScreen"),
    callPhone = document.querySelector("#callPhone"),
    exitBtn = document.querySelector(".exit-btn"),
    hiddenIcon = document.querySelectorAll(".bi-info-circle"),
    btnP = document.querySelectorAll("p"),
    changeDate = document.querySelectorAll(".date-change");


btn.forEach(item => {
    item.addEventListener("click", () => {
        if (item.id == "defoult") {
            display.style.display = "block";
            display2.style.background = "";

        } else if (item.id == "btn") {
            secondScreen.style.display = "block";

        } else if (item.id == "callPhone") {
            fourthdScreen.style.display = "block";
        } else if (item.id == "exit") {
            fourthdScreen.style.display = "none";
        }
    });
});

const iconRemove = document.querySelectorAll("#iconChange");
const editBtn = document.querySelector("#sort-btn"),
      readyBtn = document.querySelector("#ready-btn");

btnP.forEach(paragraph => {
    paragraph.addEventListener("click", () => {
        if (paragraph.id == "sort-btn") {
            editBtn.style.display = "none";
            readyBtn.style.display = "block";
            changeDate.forEach(item => {
                gsap.to (item, {
                    x: 20,
                    duration: .4,
                });
            });
            hiddenIcon.forEach(hide => {
                gsap.to (hide, {
                    scale: 0,
                    duration: .4,
                });
            });
            iconRemove.forEach(change => {
                change.classList.remove("bi-telephone-inbound-fill")
                change.classList.add("bi-dash-circle-fill");
                change.style.color = "red";
            });
        } else if (paragraph.id == "ready-btn") {
            editBtn.style.display = "block";
            readyBtn.style.display = "none";
            changeDate.forEach(item => {
                gsap.to (item, {
                    x: 0,
                    duration: .4,
                });
            });
            hiddenIcon.forEach(hide => {
                gsap.to (hide, {
                    scale: 1,
                    duration: .4,
                });
            });
                iconRemove.forEach(change => {
                    change.classList.add("bi-telephone-inbound-fill")
                    change.classList.remove("bi-dash-circle-fill");
                    change.style.color = "";
                });
        }
    });
});


