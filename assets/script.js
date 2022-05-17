// create a clock function
//assign given variable that will track a running clock with moment .js
// boxes that have a text field from 8am-4pm.
//call a function that will change the color of the current time block. Time block will turn a color at the end of every hour to indicate the time has passed. Current time will be indicated with a light color. Time blocks in the future by 1 hour will be a light color.
// add save button to each timeblock. onclick the button will store information to local storage using current text input.
// current text input can be added to and saved again in local storage
//track input to local storage and print underneath the jumbotron
//indicate local storage was successful with message fill with id inidcate action

//clock function. call on element id #time-clock in jumbotron and assign a let vaariable. assign function to call on the variable in jumbotron to print timeclock and update in a loop. set timeclock to display interval to update timer every second. Do the same to track date in readable format. set to update every second to stay current with time.

let timeClock = document.getElementById("time-clock");
let dateTracker = document.getElementById("date-tracker");

window.setInterval(() => {
  $(timeClock).html(moment().format("h:mm:ss a"));
}, 1000);

window.setInterval(() => {
  $(dateTracker).html(moment().format("dddd - LL"));
}, 1000);

// let hourTracker = setInterval(() => {
//   $(hourTracker).html(moment().format(" hh:mm:ss "));
//   console.log(hourTracker);
// }, 1000);

// time boxes that have a text field  and each is labeled from 8am-4pm.
//call a function that will change the color of the current time block. Time block will turn a color at the end of every hour to indicate the time has passed. Current time will be indicated with a light color. Time blocks in the future by 1 hour will be a light color. use time clock H to change the color.

let timeBlock1 = document.getElementById("text-input-hr1");
let timeBlock2 = document.getElementById("text-input-hr2");
let timeBlock3 = document.getElementById("text-input-hr3");
let timeBlock4 = document.getElementById("text-input-hr4");
let timeBlock5 = document.getElementById("text-input-hr5");
let timeBlock6 = document.getElementById("text-input-hr6");
let timeBlock7 = document.getElementById("text-input-hr7");
let timeBlock8 = document.getElementById("text-input-hr8");
let timeBlock9 = document.getElementById("text-input-hr9");

//when hour tracker increases by 1 Gray color of time block. change time block of current schedule to green. reset all colors after hour increases 24 times.

// //timeblock color change for passed time
// function minutesTracker() {
//   //get the mins of the current time
//   let minutes = new Date().getMinutes();
//   if (minutes == "00") {
//     timeBlock1.style.backgroundColor = "lightgray";
//     timeBlock2.style.backgroundColor = "lightgray";
//     timeBlock3.style.backgroundColor = "lightgray";
//     timeBlock4.style.backgroundColor = "lightgray";
//     timeBlock5.style.backgroundColor = "lightgray";
//     timeBlock6.style.backgroundColor = "lightgray";
//     timeBlock7.style.backgroundColor = "lightgray";
//     timeBlock8.style.backgroundColor = "lightgray";
//     timeBlock9.style.backgroundColor = "lightgray";
//   }

// }
// setInterval(minutesTracker, 1000);

//timeblock color change for current time
let hourBlock1 = document.querySelector("hour1");
hourBlock1 = 8;
console.log(hourBlock1);
let hourBlock2 = document.querySelector("hour2");
hourBlock2 = 9;
console.log(hourBlock2);
let hourBlock3 = document.querySelector("hour3");
hourBlock3 = 10;
console.log(hourBlock3);
let hourBlock4 = document.querySelector("hour4");
hourBlock4 = 11;
console.log(hourBlock4);
let hourBlock5 = document.querySelector("hour5");
hourBlock5 = 12;
console.log(hourBlock5);
let hourBlock6 = document.querySelector("hour6");
hourBlock6 = 13;
console.log(hourBlock6);
let hourBlock7 = document.querySelector("hour7");
hourBlock7 = 14;
console.log(hourBlock7);
let hourBlock8 = document.querySelector("hour8");
hourBlock8 = 15;
console.log(hourBlock8);
let hourBlock9 = document.querySelector("hour9");
hourBlock9 = 16;
console.log(hourBlock9);

function currentHourTracker() {
  let hours = new Date().getHours();
  console.log(hours);
  //timeblock 1
  if (hours == hourBlock1) {
    timeBlock1.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock1) {
    timeBlock1.style.backgroundColor = "lightblue";
  } else {
    timeBlock1.style.backgroundColor = "lightgrey";
  }
  //timeblock 2
  if (hours == hourBlock2) {
    timeBlock2.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock2) {
    timeBlock2.style.backgroundColor = "lightblue";
  } else {
    timeBlock2.style.backgroundColor = "lightgrey";
  }
  //timeblock 3
  if (hours == hourBlock3) {
    timeBlock3.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock3) {
    timeBlock3.style.backgroundColor = "lightblue";
  } else {
    timeBlock3.style.backgroundColor = "lightgrey";
  }
  //timeblock 4
  if (hours == hourBlock4) {
    timeBlock4.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock4) {
    timeBlock4.style.backgroundColor = "lightblue";
  } else {
    timeBlock4.style.backgroundColor = "lightgrey";
  }
  //timeblock 5
  if (hours == hourBlock5) {
    timeBlock5.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock5) {
    timeBlock5.style.backgroundColor = "lightblue";
  } else {
    timeBlock5.style.backgroundColor = "lightgrey";
  }
  //timeblock 6
  if (hours == hourBlock6) {
    timeBlock6.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock6) {
    timeBlock6.style.backgroundColor = "lightblue";
  } else {
    timeBlock6.style.backgroundColor = "lightgrey";
  }
  //timeblock 7
  if (hours == hourBlock7) {
    timeBlock7.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock7) {
    timeBlock7.style.backgroundColor = "lightblue";
  } else {
    timeBlock7.style.backgroundColor = "lightgrey";
  }
  //timeblock 8
  if (hours == hourBlock8) {
    timeBlock8.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock8) {
    timeBlock8.style.backgroundColor = "lightblue";
  } else {
    timeBlock8.style.backgroundColor = "lightgrey";
  }
  //timeblock 9
  if (hours == hourBlock9) {
    timeBlock9.style.backgroundColor = "lightgreen";
  }
  if (hours < hourBlock9) {
    timeBlock9.style.backgroundColor = "lightblue";
  } else {
    timeBlock9.style.backgroundColor = "lightgrey";
  }
}

setInterval(currentHourTracker, 1000);
