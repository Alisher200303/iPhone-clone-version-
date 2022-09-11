"use strict";



// const key = [2, 0, 0, 3];


const btnNumber = document.querySelectorAll("li"),
      key = document.querySelector("input");

    
btnNumber.forEach((number => {
    number.onclick = () => {
        if (number.id == "clear") {
            let str = key.value.toString();
            key.value = str.substr(0, str.length - 1);
        } else if (key.accessKey == key.value) {
            thirdScreen.style.display = "block";
        } else {
            key.value += number.innerText;
            
        }
    }
}));

