const myName = "Sameed";
const repoCount = 10;

// console.log(name + repoCount + " value");
console.log(`my name is ${myName.toUpperCase()} my repo count is ${repoCount}`);

const gameName = new String("Sameed-ss-hc");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("d"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 3)
console.log(anotherString);


const newStringOne = `    sameed    
`
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://github.com/sameedsidd/chai-aur-javascript/tree/main/01_basics"
console.log(url.replace('-', '%20'));

console.log(url.includes('sameed'));
console.log(gameName.split("-"));