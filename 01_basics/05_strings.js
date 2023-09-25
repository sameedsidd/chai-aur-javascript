console.log("==============================");
const myName = "sameed"
const repoCount = 5
// console.log(myName + repoCount + " Value"); // we never use this style of string again


// console.log(`Hello my name ${myName} and I have ${repoCount} repositiory`);

const gameName = new String('sameed@gmail.com')
// console.log(gameName[3]);

// string methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));
console.log(gameName.substring(0, 4));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-15, 4)
console.log(anotherString);

const newStringOne = "  Sameed  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('https'));
console.log(gameName.split('-'));

























console.log("==============================");