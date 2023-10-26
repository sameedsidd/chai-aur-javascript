
// function sayMyName() {
//     console.log("S");
//     console.log("a");
//     console.log("m");
//     console.log("e");
//     console.log("e");
//     console.log("d");
// }
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(12, 12)

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(null)
// console.log("Result", result);





function userName(username = "sam") {
    if (!username) {
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}
const userInfo = userName()
// console.log(userInfo);

// when you have multiple value to store and see then we can use this type of function and parameters

// rest operators as same like spread operators (...)
function calculateCartPrice(...number) {
    return number
}
// console.log(calculateCartPrice(100, 200, 300, 2000));


// for object
const userOne = {
    name: "Hitesh",
    price: 999
}

const userTwo = {
    name: "Sameed",
    price: 1000
}

const userThree = {
    name: "Hafsa",
    price: 2000
}

function handledObject(anyObject) {
    console.log (`Username: ${anyObject.name} Price: ${anyObject.price}`)
    // return `Username: ${anyObject.name} Price: ${anyObject.price}`
}
// console.log(handledObject(userOne))
// handledObject(userOne)

// handledObject({

//     name: "Sameed",
//     price: 122
// })



// for array
const newArray = [100, 200, 300, 400, 500]
function returnSecondValueOfAnArray(getArray) {
    return getArray[1]
}

console.log(returnSecondValueOfAnArray(newArray));
console.log(returnSecondValueOfAnArray([1000, 2000, 3000]));