// +++++++++++++++ variables +++++++++++++ //
// var, let and const

console.log("=============== Result =================");
// const accountId = 1288479
// let accountEmail = "a@google.com"
// var accountPassword = "232323"
// let accountState;
// accountCity = "Karachi"

// accountId = "19347" // not allowed to reassign constant variable
// accountEmail = "b@gmail.com"
// accountPassword = "131313"
// accountCity = "Lahore"


/*
prefer not to use var
because of issue in block scope and functional scope
*/

// console.log(accountEmail);
// console.table([accountId, accountEmail, accountPassword, accountState, accountCity])




// +++++++++++++++ data-types +++++++++++++ //

"use strict" // treat all JS code as newer version

// alert("Sameed") // we are using nodejs, not browser

// console.log(2 
//     + 
//     3); // code should be readable 

// const myName = "Sameed Siddiqui"
// let myAge = 22
// let isLoggedIn = false
// let state;

/*
primitive data type (stack memory used)
number =>> 2 to power 53
bigInt
boolean =>> true/false
null =>> stand-alone value (type as object)
undefined =>> undefined
symbol =>> unique value

non-primitive data type (heap memory used)
array
object
function
*/

// console.log(typeof null);
// console.log(typeof undefined);


// +++++++++++++++ conversion and operations +++++++++++++ //

// let score = 123
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn);

// 1 =>> true; 2 =>> false 
// "" =>> false
// "sameed" =>> true

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************** operations ******************* //
// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);

// let str1 = "sameed"
// let str2 = " siddiqui"
// console.log((str1+str2).toUpperCase());
// console.log((str1+str2).length);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// let num1 = num2 = num3 = 2
// num1 = num2 = num3 = 2 + 3

// let gameCounter = 100
// let changeGameCount = gameCounter++
// let againGameChangeCount = changeGameCount++
// console.log(gameCounter);
// console.log(changeGameCount);
// console.log(againGameChangeCount);


// let gameCounter = 100
// let changeGameCount = ++gameCounter
// let againGameChangeCount = ++changeGameCount
// console.log(gameCounter);
// console.log(changeGameCount);
// console.log(againGameChangeCount);














// +++++++++++++++ comparison  +++++++++++++ //
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(1 < 2);
// console.log(1 <= 2);
// console.log(2 == 2);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);
// console.log(1 == "1");


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // in comparison null treat as zero

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===

// console.log(2 === "2");


// +++++++++++++++ strings and methods +++++++++++++ //
const myName = "Sameed Siddiqui"
const myRepoCount = 5
//  console.log(`This is ${myName} and I have ${myRepoCount} repository`);

const gameName = new String("a@gmail.com")
// console.log(gameName[3]);

// string methods 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));
// console.log(gameName.substring(0, 4));

const newString = gameName.substring(0, 3)
// console.log(newString);

const anotherString = gameName.slice(0, 1)
// console.log(anotherString);

const url = "https://www.google.com"
// console.log(url.replace('.', '-'));

// console.log(url.includes('www'));
// console.log(newString.split('@'));



// +++++++++++++++ number and maths +++++++++++++ //

// const score = 100
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toFixed(2));
// console.log(balance.toString().charAt(2));

const otherNumber = 123.432
// console.log(otherNumber.toPrecision(3));

const hundreds = 10000
// console.log(hundreds.toLocaleString('en-PK'));

// ************* maths *********************

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.7));
// console.log(Math.min(3,5,2,5,8));
// console.log(Math.max(12,43,24,23));

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() *10 ) + 1);

let min = 10
let max = 20

// console.log(Math.floor((Math.random() * (max - min)) + 1) + min);


// +++++++++++++++ primitive and non-primitive data types +++++++++++++ //

// types =>> number, null, bigInt, boolean, string, symbol, undefined (nn bb ss u)

const score = 100
const scoreValue = 100
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')
// console.log(id == anotherID);

const bigNumber = 333323434231234543n
// console.log(typeof bigNumber);


// reference data type
// array, object, function

const heros = ["Iron Man", "Hulk", "Thor"]
const info = {
    myName: 'Sameed',
    age: 22,
    city: 'karachi'
}

const myFunction = function () {
    // console.log("Hello World");
}

// console.log(heros[2]);
// console.log(typeof heros);
// console.log(typeof info);

let myYoutubeChannel = "CoderzHub"
let anotherName = "Blah blah"
anotherName = "Yoo yoo"


let userOne = {
    id: 22,
    email: "a@gmail.com"
}


let userTwo = userOne
userTwo.email = "e@gmail.com"

// console.log(userOne);
// console.log(userTwo);


// ========================== Dates
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate); // date =>> treat as object

// let newDate = new Date(2023, 0, 30)
// let newDate = new Date(2023, 0, 30, 5, 3)
// let newDate = new Date("2023, 0, 30,")
// let newDate = new Date("12-01-2023")

// console.log(newDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));


// `{$newDate.getDay()} and time`

let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getTime());
// console.log(newDate.getHours());
// console.log(newDate.getDay());
// console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})
// console.log(newDate);





























console.log("========================================");