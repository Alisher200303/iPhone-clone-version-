"use strict";


const btn = document.querySelectorAll("div"),
      display = document.querySelector(".first-display"),
      display2 = document.querySelector(".phone-line"),
      secondScreen = document.querySelector("#secondScreen"),
      thirdScreen = document.querySelector("#thirdScreen"),
      fourthdScreen = document.querySelector("#fourthdScreen"),
      callPhone = document.querySelector("#callPhone"),
      exitBtn = document.querySelector(".exit-btn");
    

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


