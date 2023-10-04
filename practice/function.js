function sayMyName() {
    console.log("S");
    console.log("a");
    console.log("m");
    console.log("e");
    console.log("e");
    console.log("d");
}
// sayMyName()

function addTwoNumber(num1, num2) {
    console.log(num1 + num2);
}
// addTwoNumber(1,1)

function addTwoNumber(num1, num2) {
    let result = num1 + num2
    return result
}

const output = addTwoNumber(12, 12)
// console.log(output);

function username(username) {
    if (!username) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

const userInfo = username("Sameed")
// console.log(userInfo);


// when we have multiple values to store and see then we can use rest operator and it is similar to spread operator (...)

function calculateCartPrice(val1, val2, ...number) {
    return val1, val2, number
}
// console.log(calculateCartPrice(100, 200, 300, 400, 500));

// for object

const newObj = {
    id: 1,
    email: "a@gmail.com"
}

function handledObject(anyObject) {
    console.log(`id: ${anyObject.id} email: ${anyObject.email}`);
}

// handledObject(newObj)
handledObject({
    id: "Sameed",
    email: 122
})




// for array 

const newArray = [1, 2, 3, 4, 5]
function returnSecondValueOfAnArray(getArray) {
    return getArray[1]
}
// console.log(returnSecondValueOfAnArray(newArray));
// console.log(returnSecondValueOfAnArray([1000, 2000, 3000]));
























