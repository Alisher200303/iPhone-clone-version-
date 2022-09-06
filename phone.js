"use strict";


const btn = document.querySelectorAll("div"),
      display = document.querySelector(".first-display"),
      display2 = document.querySelector(".phone-line"),
      secondScreen = document.querySelector("#secondScreen"),
      thirdScreen = document.querySelector("#thirdScreen"),
      fourthdScreen = document.querySelector("#fourthdScreen"),
      callPhone = document.querySelector("#callPhone");
    

btn.forEach(item => {
    item.addEventListener("click", () => {
        if (item.id == "defoult") {

            display.style.display = "block";
            display2.style.background = "";

        } else if (item.id == "btn") {
            secondScreen.style.display = "block";
        }
    });
});

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

/*
* Starts any clocks using the user's local time
* From: cssanimation.rocks/clocks
*/
function initLocalClocks() {
// Get the local time using JS
var date = new Date;
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();

// Create an object with each hand and it's angle in degrees
var hands = [
{
  hand: 'hours',
  angle: (hours * 30) + (minutes / 2)
},
{
  hand: 'minutes',
  angle: (minutes * 6)
},
{
  hand: 'seconds',
  angle: (seconds * 6)
}
];
// Loop through each of these hands to set their angle
for (var j = 0; j < hands.length; j++) {
var elements = document.querySelectorAll('.' + hands[j].hand);
for (var k = 0; k < elements.length; k++) {
    elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
    elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
    // If this is a minute hand, note the seconds position (to calculate minute position later)
    if (hands[j].hand === 'minutes') {
      elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
    }
}
}
}



/*
* Do the first minute's rotation
*/
function moveMinuteHands(containers) {
for (var i = 0; i < containers.length; i++) {
containers[i].style.webkitTransform = 'rotateZ(6deg)';
containers[i].style.transform = 'rotateZ(6deg)';
}
// Then continue with a 60 second interval
setInterval(function() {
for (var i = 0; i < containers.length; i++) {
  if (containers[i].angle === undefined) {
    containers[i].angle = 12;
  } else {
    containers[i].angle += 6;
  }
  containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
  containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
}
}, 60000);
}

const btnAll = document.querySelectorAll("#size");

const firstIcon = document.querySelector("#star"),
      firstTitle = document.querySelector("#starTitle");

const secondIcon = document.querySelector(".time"),
      secondTitle = document.querySelector(".secondTitle");

const thirdIcon = document.querySelector(".contact"),
      thirdTitle = document.querySelector(".thirdTitle");

const fourhdIcon = document.querySelector(".keypad"),
      fourhdTitle = document.querySelector(".fourhdTitle");

const fifthIcon = document.querySelector(".voice"),
      fifthTitle = document.querySelector(".fifthTitle");


// #active-color ===> active CLASS

