// string and its methods
/*
length => property
toUpperCase()
toLowerCase()
chartAt()
indexOf()
substring()
slice() => return the section of the string
splice()
trim()
replace()
includes()
split()

The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. The slice() method returns an empty string if this is the case.
*/

const myName = "Sameed"
const myRepo = 5
// console.log("My name is " + myName + " and I have " + myRepo + " repo"); // we don't use this string style now

// console.log(`my name is ${myName} and I have ${myRepo} repo count`);

const email = new String("sameedsiddiqui9@gmail.com");
// console.log(gameName[3]);
// console.log(email.length);
// console.log(email.toUpperCase());
// console.log(email.toLowerCase());
// console.log(email.charAt(2));
// console.log(email.indexOf("@"));
// console.log(email.substring(0, 4));

// const newString = email.substring(5, 3)
// console.log(newString);

// console.log("===============");

// const anotherString = email.slice(5, 3)
// console.log(email);
// console.log(anotherString);

const newString = "   sameed    "
console.log(newString);
console.log(newString.trim());

const url = "https://www.google.com google"
console.log(url.replace("w", "m"));
console.log(url.includes("https"));
console.log(url.split('-'));

