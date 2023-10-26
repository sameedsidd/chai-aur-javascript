const user = {
    username: "Sameed",
    age: 22,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }
}
// (this) keyword is actually used to access current context
user.welcomeMessage()
user.username = "Hafsa"
user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Hitesh"
//     console.log(username);
// }
// chai()

// const chai = function () {
//     let username = "Hitesh"
//     console.log(username);
// }
// chai()

// (this) keyword cannot work in the function

// const chai = () => {
//     let username = "Hafsa"
//     console.log(username);
// }
// chai()



// explicit return 
const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(12,12));

const addThree = (num1, num2, num3) => (num1 + num2 + num3)

// console.log(addThree(12,12,12));

const addFourNumber = (num1, num2, num3, num4) => num1 + num2 + num3 + num4
console.log(addFourNumber(12,12,12,12));

// return object

const obj = () => ({username: "Hitesh"})
console.log(obj());
// object return should be wrapped in ()
















