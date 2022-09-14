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
    editBtn = document.querySelector("#sort-btn"),
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


editBtn.addEventListener("click", () => {
    if (editBtn.innerHTML = "Edit") {
        editBtn.innerHTML = "Tink";
        changeDate.forEach(item => {
            gsap.to(item, {
                x: 20,
                duration: 0.4,
            });
        });
        hiddenIcon.forEach(hide => {
            gsap.to(hide, {
                scale: 0,
            });
        });
    }
    editBtn.addEventListener("click", () => {
        if (editBtn.innerHTML = "Tink") {
            editBtn.innerHTML = "Edit";
            changeDate.forEach(item => {
                gsap.to(item, {
                    x: 0,
                    duration: 0.4,
                });
            });
            hiddenIcon.forEach(hide => {
                gsap.to(hide, {
                    scale: 1,
                });
            }); 
        }
    });
});



// <i class="bi bi-dash-circle-fill"></i>

// iconRemove.forEach(change => {
//     change.classList.remove("bi-telephon-inbound-fill");
//     change.classList.add("bi-dash-circle-fill");
// });
