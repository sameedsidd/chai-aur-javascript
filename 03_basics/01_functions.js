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
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage());
