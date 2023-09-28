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





































console.log("========================================");