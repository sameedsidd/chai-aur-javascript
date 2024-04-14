const user = {
  username: "Histesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// "this" keyword is used for accessing current context in scope

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2); 

console.log(addTwo(2, 3));
