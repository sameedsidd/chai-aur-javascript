// for loop
// for (let i = 0; i < 10; i++) {
//     const element = i
//     if (element == 5) {
//         console.log(`5 is the best number`);
//         continue
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner loop: ${j} and Outer Loop: ${i}`);
//     }
// }

// let myArray = ["flash", "batman", "superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// for (let index = 0; index <= 10 ; index++) {
//     if (index == 6) {
//         console.log(`6 number detected`);
//         break
//     }
//     console.log(index);
// }

// for (let index = 0; index <= 10 ; index++) {
//     if (index == 6) {
//         console.log(`6 number detected`);
//         continue
//     }
//     console.log(index);
// }

// ===================================== while loop

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ["flash", "batman", "superman"]
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr++
// }

// let score = 1
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score < 10);

// =====================================================
// for of loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     if (greet == " ") {
//         console.log(`Space detected`);
//         break
//     }
//     console.log(greet);
// }

// Map

// const map = new Map();
// map.set("IN", "India");
// map.set("PK", "Pakistan");
// map.set("EN", "England");

// console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const key of myObject) {
//     console.log(key);

// }

// ===================================================
// const myObject = {
//   js: "javascript",
//   cpp: "C++",
//   rb: "ruby",
//   swift: "swift by apple",
// };

// for (const key in myObject) {
//   console.log(`${key}: shortcut is for ${myObject[key]}`);
// }

// console.log("=========================================");

// const programming = ["java", "js", "python", "ruby"]
// for (const key in programming) {
//    console.log(`${key}: ${programming[key]}`);
//    console.log(``);
// }

// const map = new Map()
// map.set('IN', 'India')
// map.set('PK', 'Pakistan')
// map.set('EN', 'England')

// for (const key in map) {
//    console.log(key);
// }

// ======================================================

// const coding = ["java", "js", "python"];
// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, arr, index) => {
//     console.log(item, arr, index);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName: "Ruby",
    languageFileName: "rb",
  },
];

// myCoding.forEach((item) => {
//     console.log(item.languageName);
// });

// ===================================================

// const coding = ["Java", "Js", "Python", "Ruby"];
// let newCode = coding.forEach((item) => {
//   // return item
//   console.log(item);
// });
// console.log(newCode);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newNums = nums.filter((item) => {
//     return item > 5
// });

// console.log(newNums);

// let newNums = nums.filter((item) => item > 5);
// console.log(newNums);

const newNums = [];
nums.filter((item) => {
    if (item > 4) {
        newNums.push(item)
    }
});
console.log(newNums);
