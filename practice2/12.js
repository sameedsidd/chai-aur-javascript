function sayMyName() {
  console.log("S");
  console.log("a");
  console.log("m");
  console.log("e");
  console.log("e");
  console.log("d");
}
// sayMyName()

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// addTwoNumbers(12,12)

function addThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3
}
// console.log(addThreeNumbers(12,12,12));

const result = addThreeNumbers(12,12,12)
// console.log(result);



function userName(username = "Sam") {
  if (!username) {
    console.log("please enter your name");
    return
  }
  return `${username} just logged in`;
}
const info = userName("Sameed")
// console.log(info);

// when you have multiple value to store and see, then we cab use this type of function and give parameters

// rest operators is same like as spread operator

function numCounts(val1, val2, ...number) {
  return val1, val2, number
}
// console.log(numCounts(100, 200, 300, 400));



// for object

const userOne = {
  name: "Sameed",
  age: 22
}
const userTwo = {
  name: "Hafsa",
  age: 19
}
const userThree = {
  name: "Hayat",
  age: 5
}

function handledObject(anyObject) {
  // return `Username: ${anyObject.name} Age: ${anyObject.age}`
  console.log(`Username: ${anyObject.name} Age: ${anyObject.age}`);
}
// console.log(handledObject(userOne, userTwo));
// handledObject({
//   name: "Zee",
//   age: 23
// })

// for array

const newArray = [100, 200, 300, 400, 500]
function returnSecondValueOfAnArray(getArray) {
  return getArray[1]
}
// console.log(returnSecondValueOfAnArray(newArray));
console.log(returnSecondValueOfAnArray([1000, 2000, 3000, 4000, 50000]));























