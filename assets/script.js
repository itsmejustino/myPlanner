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

let hourTracker = setInterval(() => {
  $(hourTracker).html(moment().format("h"));
  console.log(hourTracker);
}, 1000);


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