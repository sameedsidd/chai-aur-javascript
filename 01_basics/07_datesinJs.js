// Dates

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 5, 23)
// let myCreatedDate = new Date(2023, 5, 23, 5, 7)
let myCreatedDate = new Date("2022-11-14");

// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // millisecond to seconds

let newDate = new Date();

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

// console.log(newDate);
// let getMonth = newDate.getMonth();
// console.log(months[getMonth]);

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})



