// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.0;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 12233227827632827327n;
// console.log(typeof bigNumber);

// Reference (Non-primitive)

// Array, Object, Function

const heros = ["Superman", "Batman", "Spider"];
const info = {
  name: "Sameed",
  age: 22,
};
const myFuntion = function () {
  console.log("Hello Sam!");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ********************************************************

// Stack (Primitive), Heap (Non-Primotive)

let myYoutubeName = "histeshchoudharydotcom";

let anothername = myYoutubeName;
anothername = "chaiaurcode";

// console.log(myYoutubeName);
// console.log(anothername);

let userOne = {
  email: "a@gmail.com",
  id: 222,
};

let userTwo = userOne;
userTwo.email = "b@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
