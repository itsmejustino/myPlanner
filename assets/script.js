// create a clock function
//assign given variable that will track a running clock with moment .js
//dynamically create time boxes that have a text field from 8am-4pm.
//call a function that will change the color of the current time block. Time block will turn a color at the end of every hour to indicate the time has passed. Current time will be indicated with a light color. Time blocks in the future by 1 hour will be a light color.
// add save button to each timeblock. onclick the button will store information to local storage using current text input.
// current text input can be added to and saved again in local storage
//track input to local storage and print underneath the jumbotron
//indicate local storage was successful with message fill with id inidcate action

//clock function. call on element id #time-clock in jumbotron and assign a let vaariable. assign function to call on the variable in jumbotron to print timeclock and update in a loop. set timeclock to display interval to update timer every second. Do the same to track date in readable format. set to update every second to stay current with time.

let timeClock = document.getElementById('time-clock')
let dateTracker = document.getElementById('date-tracker')

window.setInterval(() => {
  $(timeClock).html(moment().format('LTS'))
}, 1000)

window.setInterval(() => {
  $(dateTracker).html(moment().format('dddd - LL'))
}, 1000)

//dynamically create time boxes that have a text field from 8am-4pm.
