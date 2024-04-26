// ========== Array =========== //

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Superman", "Batman", "Flash"];
const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr2[1]);

// Array methods
myArr.push(6);
myArr.push(7);

myArr.pop();
myArr.pop();

myArr.unshift(11);
myArr.unshift(12);

myArr.shift();
myArr.shift();

// console.log(myArr);
// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));
// console.log(myArr.lastIndexOf(6));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// slice

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// const slicedFruits = fruits.slice(1, 3); // Returns ['banana', 'cherry']

// console.log(slicedFruits);

// console.log("A:", fruits);

// const my1 = fruits.slice(1, 3)
// console.log(my1);

// console.log("B:", fruits);

// const my2 = fruits.splice(1, 3, "mango")
// console.log(my2);

// console.log("C:", fruits);

// In summary, slice() is used to extract a portion of an array without modifying the original array, while splice() is used to modify the original array by removing, replacing, or adding elements at specified positions.

// ======================================

const marvel_heros = ["ironman", "thor", "black window"];
const dc_heros = ["superman", "batman", "flash"];

const dd = [1, 2, 3, 4, 5];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator

// const all_new_heros = [...marvel_heros, ...dc_heros, ...dd];

// console.log(all_new_heros);

// const another_array = [1, 2, 3, 4, 5, [6, 7, [8, 9, [10]]]];

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("Sameed"));
// console.log(Array.from("Sameed"));
// console.log(Array.from({ name: "Sameed" }));
// interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

// ========== Object ========== //

// singleton
// Object.create()

// Object literals

const mySym = Symbol("key1");

const JsUser = {
  myName: "Sameed",
  fullName: "Sameed Siddiqui",
  age: 23,
  [mySym]: "key1",
  email: "a@gmail.com",
  isLoggedIn: true,
  location: "Karachi",
  lastLoggedIn: ["Mon", "Tue"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]); // recommended
// console.log(JsUser["fullName"]);

// console.log(JsUser[mySym]);

JsUser.email = "b@gmail.com";
// console.log(JsUser);

// Object.freeze(JsUser)

JsUser.name = "Hafsa";
// console.log(JsUser.name);

// JsUser.greeting = function () {
//   console.log(`Hello World!`);
// };

// JsUser.greetingTwo = function () {
//     console.log(`Hi, ${this.email}`);
// }

// console.log(JsUser.greetingTwo());

// =======================================

// const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "12abc";
tinderUser.name = "Sameed";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userName: {
      firstName: "Sameed",
      lastName: "Siddiqui",
    },
  },
};

// console.log(regularUser["fullName"]["userName"]["firstName"]);

// console.log(regularUser.fullName.userName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = { obj1, obj2, obj3 };
// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
  {
    id: 1,
    name: "sameed"
  },
  {
    id: 2,
    name: "siddiqui"
  },
]

// console.log(users[0].name);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "Js in Hindi",
  price: 299,
  TeacherName: "Hitesh Choudhary"
}

// console.log(course.TeacherName);
// console.log(course.price);

const {TeacherName: teacher} = course
console.log(teacher);

// API => apna kaam kisi or ke sar par daal dena

// {
//     "name": "Sameed",
//     "age": "23", 
//     "email": "a@gmail.com"
// }

// [
//     {},
//     {},
//     {}
// ]

