// Primitive datatypes
// 7 types: String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 234546654345654343n
// console.log(typeof bigNumber);





// Reference (Non-primitive)
// Array, Object and function

const heros = ["Iron Man", "Hulk", "Thor"]
const info = {
    name: "Sameed",
    age: 22,
    city: "Karachi"
}

const myFunction = function() {
    // console.log("Hello World");
}

// console.log(typeof(heros));
// console.log(typeof(info));
// console.log(typeof(myFunction));

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++

// Primitive DataTypes use (Stack Memory)
// * stack memory gives you copy to change data


// Reference DataTypes use (Heap Memory)
// * heap memory gives you direct reference

let myYoutubeName = "sameedsiddiquidotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    id: 122,
    email: "a@google.com"
}
 let userTwo = userOne
userTwo.email = "b@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);