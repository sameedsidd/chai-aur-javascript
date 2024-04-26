// for
// for (let index = 0; index < 10; index++) {
//   const element = index;
//   if (element == 5) {
//     console.log("5 is the best number");
//   }
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// const heros = ["superman", "batman", "flash"];
// console.log(heros.length);

// for (let i = 0; i < heros.length; i++) {
//     console.log(heros[i]);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     console.log("5 number is detected");
//     break;
//   }
//   console.log(i);
// }

// let index = 0;
// while (index <= 10) {
//   console.log(`value of index is ${index}`);
//   index = index + 2;
// }

// let myArr = ["A", "B", "C"];
// let arr = 0;
// while (arr < myArr.length) {
//   console.log(myArr[arr]);
//   arr = arr + 1;
// }

// let score = 1;
// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score < 10);

// for of
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "hello world";
// for (const greet of greetings) {
//     if (greet == " ") break;
//     console.log(greet);
// }

// Map => is a object that holds key and values and remember sequence of order

// const map = new Map();
// map.set("IN", "India");
// map.set("PK", "Pakistan");
// map.set("CH", "China");
// map.set("JP", "China");
// map.set('CH', "China") // not duplicate values or repeat

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);
// }

// for (const [key] in map) {
//    console.log(key);
// }

// const myObject = {
//     game1: "NFS",
//     game2: "Spiderman",
//   };

//   for (const [key, value] of myObject) {
//     console.log(key, value);
//   } not working for object

const myObject = {
  js: "javascript",
  html: "hyper text markup language",
  css: "cascading stylesheet",
};

// for (const key in myObject) {
//    console.log(`${key} is shortcut => ${myObject[key]}`);
// }

// const programming = ['js', 'html', 'css']
// for (const key in programming) {
//    console.log(`${programming[key]}`);
// }

// const map = new Map();
// map.set("IN", "India");
// map.set("Pk", "Pakistan");
// map.set("CH", "China");
// map.set("JP", "Japan");

// console.log(typeof map);
// for (const key in map) {
//    console.log(key);
// }

// foreach

// const coding = ["js", "cpp", "java", "swift"];
// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((val) => {
//     console.log(val);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "ruby",
    languageFile: "rb",
  },
];

//   myCoding.forEach((item)=>{
//     console.log(item.languageFile);
//   })

// const coding = ["js", "cpp", "java", "swift"];
// const value = coding.forEach((item) => {
//     // console.log(item);
//     return; // foreach is not return a value
// });
// console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// const newNums = myNums.filter((num) => {
//     return num > 2
// });

// console.log(newNums);

// const newNums = myNums.filter((num) => num > 2);
// console.log(newNums);

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num)
//   }
// });
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => {
  return bk.genre === "History";
});

userBooks = books.filter((bk)=>bk.publish >= 1995 && bk.genre === "History")

console.log(userBooks);
