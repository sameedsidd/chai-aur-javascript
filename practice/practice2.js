// ========= functions ========= //

function sayName() {
  console.log("S");
  console.log("a");
  console.log("m");
  console.log("e");
  console.log("e");
  console.log("d");
}

// sayName()
// sayName()

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

// addTwoNumber(12, 12);

function addTwoNumber(num1, num2) {
  let result = num1 + num2;
  return result;
}

const result = addTwoNumber(34, 43);
// console.log(result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage());

// rest operator
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 500, 2000));

const user = {
  username: "Sameed",
  id: 12233,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} Id is ${anyObject.id}`);
}

// handleObject(user);

// handleObject({
//   username: "Sam",
//   id: 1222,
// });

const myNewArray = [100, 200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray.shift();
}
// console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([100, 200, 300, 400, 500]));

// ========== scopes =========== //
// {} => scopes
// var c = 300

let a = 300;

if (true) {
  let a = 10;
  let b = 20;
  //   console.log(`Inner scopes ${a}`);
}

// console.log(`Outer scopes ${a}`);

// function one() {
//   const username = "Sam";
//   function two() {
//     const website = "samdotcom";
//     console.log(`${username}`);
//   }
// //   console.log(website);
//   two()
// }
// one()

if (true) {
  const username = "Sameed";
  if (username === "Sameed") {
    const website = "youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

// console.log(addOne(1));
// function addOne(num1) {
//   return num1 + 1;
// }

// // console.log(addTwo(2)); // mini hoisting
// const addTwo = function (num1) {
//   return num1 + 2;
// };

// =============== Arrow function ===========

// const users = {
//   username: "Sam",
//   price: 999,
//   welcome: function () {
//     console.log(`${this.username}, welcome to website`);
//     console.log(this);
//   },
// };

// "this" keyword is used for accessing current context in scope

// users.welcome()
// users.username = "Sameed"
// users.welcome()

// console.log(this);

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "Sam"
//     console.log(this.username);
// }

// chai()
// "this" connect work in function

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(2, 2));

// Immediately Invoked Function (IIFE)
// IIFE is used for removed pollution in global scope

// (function chai() {
//   //named iife
//   //   console.log(`DB Connected`);
// })();

// semi colon must be assigned to run two iife functions

// ((name) => {
//   // unnamed iife
//   //   console.log(`DB Connected`);
// })();

// =========================================//

// if

// const isUserLoggedIn = true;
// const temperature = 40;

// if (temperature === 40) {
//   console.log("less than 50");
// } else {
//   console.log("more than 50");
// }
// <, >, <=, >=, ==, ===, !=, !==

// const score = 200;
// if (score > 200) {
//   let power = fly;
//   console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000;
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1200");
// }

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitCard && 2 == 3) {
//   console.log("Allow to buy");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("User logged in");
// }

// ===== switch ==== //

const month = 3;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;

  default:
    console.log("no match");
    break;
}

// ========================

const months = "jan";
switch (months) {
  case "jan":
    console.log("matched");
    break;

  default:
    console.log("no match");
    break;
}

//  ============================
// const userEmail = [];
// if (userEmail) {
//   console.log("got user email");
// } else {
//   console.log("don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', "", [], {}, function(){}

// if (userEmail.length == 0) {
//   console.log("Array empty");
// }

// const emptyObj = {};

// if (Object.keys(emptyObj)) {
//   console.log("Object is empty");
// }

// false == 0 : true
// false == '' : true
// 0 == '' : true

// Nullish Coalescing Operator (??): null and undefined

let val1 = 5;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = undefined ?? 10 ?? 20
// console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(less) : console.log("more"); 