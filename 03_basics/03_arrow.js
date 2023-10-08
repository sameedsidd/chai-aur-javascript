const user = {
    username: "Sameed",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}
// (this) keyword is actually used to access current context
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai()

/*
(this) keyword can't work in the functions
*/


// const chai = () => {
//     let username = "Sameed"
//     console.log(this.username);
// }

// chai()


// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(12,32));

// implicit return

// const addThree = (num1, num2, num3) => num1 + num2 + num3
// console.log(addThree(12,12,12));

// const addOne = (num1, num2) => (num1 + num2)
// console.log(addOne);

const addTwo = () => ({username: "Hitesh"}) // object return should be wrapped in ()
console.log(addTwo());














