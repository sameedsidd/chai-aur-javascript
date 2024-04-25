// ======= Variables ========== //
// const accountId = 112233;
// let accountEmail = "a@gmail.com";
// var accountPassword = "12345";
// accountCity = "Karachi";

/*
Prefer not to use var 
because of issue in block and functional scope
*/

// accountId = 1122 // not allowed
// accountEmail = "b@gmail.com";
// accountPassword = 123;
// accountCity = "lahore";

// console.table([accountId, accountEmail, accountPassword, accountCity]);

// ====== Data types ======== //

"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we are using nodejs, not browser

// console.log(
//     3 + 3
// ); // code readability should be high

// console.log("Sameed"); // that's like

// let myName = "Sameed"
// let myAge = 23
// let isLoggedIn = true
// let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => false
// null => standalone value
// undefined
// symbol => unique

// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

//  ========= Conversion and Operations ====== //

// let score = "33abc"
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let booleanIsLogged = Boolean(isLoggedIn)
// console.log(booleanIsLogged);

// 1 => true; 0 => false
// "" => false; "Sameed" => true

// let someNumber = 33
// let stringNumber = String(someNumber);
// console.log(typeof stringNumber);

// **************** Operation *************

// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 / 2);
// console.log(2 * 2);
// console.log(3 % 2);

// let str1 = "hello "
// let str2 = "world"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(((3 + 4) * 5) / 4);

// console.log(+true);
// console.log(+"");

// let num1, num2, num3 = 2 + 3
// let gameCounter = 100
// let newGame = gameCounter++
// console.log(gameCounter);
// console.log(newGame);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// =========== Comparison ========== //

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" < 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===, !==

// console.log("2" === 2);
// console.log("2" !== 2);

// ========= String =========== //

// const myName = "Sameed";
// const repoCount = 10;

// console.log(myName + repoCount + " value");
// not recommended

// console.log(`My name is ${myName} and I have ${repoCount} repos`); // use this instead (string literals)

// const gameName = new String("Sameed,Siddiqui");
// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("e"));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-5)
// console.log(anotherString);

// const newStringOne = "  Sameed  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url =
//   "https://github.com/sameedsidd/chai-aur-javascript/tree/main/01_basics";

// console.log(url.replace("-", "%20"));
// console.log(url.replaceAll("-", "%20"));

// console.log(url.includes("sameed"));
// console.log(gameName.split(","));

// ================== strings methods
// toUpperCase()
// toLowerCase()
// slice()
// substring()
// includes()
// trim()
// replace()
// replaceAll()
// charAt()
// indexOf()

// datatype summary ==================

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.0;
// const isLoggedIn = true;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 12232827637387382n;
// console.log(typeof bigNumber);

// Reference (Non-primitive)

// Array, Object, Function

// const myArray = ["a", "b", "c"];
// const myObject = {
//   name: "Sameed",
//   age: 22,
// };
// const myFunction = function () {
//   console.log("Hello Sam!");
// };
// https://262.ecma-international.org/5.1/#sec-11.4.3

// ********************************************************

// Stack (Primitive), Heap (Non-Primotive)

// let myYoutubeName = "histeshchoudharydotcom";
// let anothername = myYoutubeName;
// anothername = "Chai aur code";

// console.log(myYoutubeName);
// console.log(anothername);

// let userOne = {
//   email: "a@gmail.com",
//   id: 222,
// };

// let userTwo = userOne;
// userTwo.email = "b@gmail.com";

// console.log(userOne.email);
// console.log(userTwo.email);

// ========== Numbers and maths

// const score = 100;
// console.log(score);

// const balance = new Number(400);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

// const otherNumber = 123.33;
// console.log(otherNumber.toPrecision(4));

// const hundreds = 100000;
// console.log(hundreds.toLocaleString("en-PK"));

// =============== Maths ================ //

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.4));
// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.max(1, 2, 3, 4, 5));

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// ================ Date ====================== //

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 5, 23);
// let myCreatedDate = new Date(2023, 5, 23, 5, 7)
// let myCreatedDate = new Date("2022-11-14")
// console.log(myCreatedDate.toString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

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

let getMonth = newDate.getMonth();
console.log(months[getMonth]);


newDate.toLocaleString('default', {
    weekday: "long"
})