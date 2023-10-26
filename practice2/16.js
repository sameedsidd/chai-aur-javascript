// if

// const isUserLoggedIn = false
// const temperature = 42

// if (temperature < 50) {
//     console.log("temperature is less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("executed");

// let score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(power);

// let balance = 100
// if (balance > 500) console.log("test");

// let balance = 1000
// if (balance > 500) {
//     console.log("less than 500");
// }
// else if(balance < 750) {
//     console.log("less than");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard && 2 === 2) {
  console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}