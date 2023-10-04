// string and its methods
/*
length ==> property
toupperCase()
toLowerCase()
charAt()
indexOf()
substring()
trim() 
includes()
replace()
slice()
split()
*/

const myName = "Sameed"
const repoCount = 7
// console.log("This is " + myName + " and I have " + repoCount + " repository in my GitHub"); // we never use this string syntax anymore

// console.log(`This is ${myName} and I have repository ${repoCount} in my GitHub`);

// const newGame = new String("sameedsiddiqui9@gmail.com")
const newGame = "sameedsiddiqui9@gmail.com"
// console.log(newGame);

// string methods
// console.log(newGame.toUpperCase());
// console.log(newGame.toLowerCase());
// console.log(newGame.length);
// console.log(newGame.charAt(2));
// console.log(newGame.indexOf('@'));
// console.log(newGame.substring(0, 4)); // last number not included

const newString = newGame.substring(0, 4)
// console.log(newGame);
// console.log(newString);

const anotherString = newGame.slice(0, 5)
// console.log(newGame);
// console.log(anotherString);

const newStringOne = "   sameed   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "sameed siddiqui"
// console.log(url.replace('w', 'a'));
// console.log(url.includes('/'));
const wordsUrl = url.split(' ')
console.log(wordsUrl[1])