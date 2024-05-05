// Q1. Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Get the current date and time
const today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
const day = today.getDay();

// Array of day names
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Display the current day
console.log(`Today is: ${dayList[day]}`);

// Get the current hour, minute, and second
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

// Determine if it's AM or PM
let prepand = hour >= 12 ? "PM" : "AM";

// Convert 24-hour format to 12-hour format
hour = hour >= 12 ? hour - 12 : hour;

// Check for special cases when hour is 0 and it's PM
if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

// Check for special cases when hour is 0 and it's AM
if (hour === 0 && prepand === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}

// Display the current time
console.log(`Current Time: ${hour} : ${minute} : ${second} ${prepand}`);

// Q2.  Write a JavaScript program to print the current window contents.
function printCurrentWindow() {
  window.print();
}

// Q3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let todays = new Date();
let dd = todays.getDate();
let mm = todays.getMonth() + 1;
const yyyy = todays.getMonth();

if (dd < 10) {
  dd = `0${dd}`;
}

if (mm < 10) {
  mm = `0${mm}`;
}

todays = `${mm}-${dd}-${yyyy}`;
console.log(todays);

todays = `${mm}/${dd}/${yyyy}`;
console.log(todays);

todays = `${dd}-${mm}-${yyyy}`;
console.log(todays);

todays = `${dd}/${mm}/${yyyy}`
console.log(todays);
