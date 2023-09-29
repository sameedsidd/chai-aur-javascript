// Arrays and methods
const myArr = [1, 2, 3, 4, 5]
const myArr1 = new Array(1, 2, 3, 4, 5)
myArr1[0] = "Sameed"

// console.log(myArr1[0]);
// console.log(myArr[0]);

// array methods
myArr.push(6)
myArr.pop()
myArr.unshift(0)
myArr.shift()
const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

const arrayOne = [1, 2, 3, 4, 5, 6]
const newArrayOne = arrayOne.slice(0, 2)
console.log("A ", arrayOne);
console.log(newArrayOne);

console.log(arrayOne.includes(3));
console.log(arrayOne.indexOf(2));

const newArrayTwo = arrayOne.splice(1, 2)
console.log("B ", arrayOne);
console.log(newArrayTwo);