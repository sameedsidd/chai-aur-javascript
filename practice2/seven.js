// primitive datatypes (use stack memory)
// nn, bb, ss, u

const score = 100;
const scoreValue = "100";
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNumber = 1234543333334323n;
// console.log(typeof bigNumber);

// Non=primitive datatypes (use heap memory)

function Name() {
  console.log(`Sameed Siddiqui`);
}

// Name();

let arr = [1, 2, 3, 4, 5];
// console.log(arr);

const info = {
    name: "Sameed",
    age: 22
}

// console.log(info);

// console.log(typeof info);
// console.log(typeof arr);
// console.log(typeof (Name));


let myYoutubeName = "SameedaurCode"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    id: 12,
    email: "a@google.com"
}

let userTwo = userOne
userTwo.email = "b@gmail.com"

console.log(userOne);
console.log(userTwo);













