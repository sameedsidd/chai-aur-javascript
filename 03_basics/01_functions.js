function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("M");
  console.log("E");
  console.log("E");
  console.log("D");
}

// sayMyName()
// sayMyName()

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

// addTwoNumber(2, 3);

function addTwoNumber(number1, number2) {
  let result = number1 + number2;
  return result;
}
const result = addTwoNumber(10, 34);
// console.log(result);

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter your name");
    return;
  }
  return `${username} just logged in.`;
}

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 20000));

const user = {
  username: "Sameed",
  id: 12233,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} Id is ${anyObject.id}`);
}

// handleObject(user)
// handleObject({
//   username: "Sam",
//   id: 22,
// });

const myNewArray = [100, 200, 300, 400, 500];
function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));
