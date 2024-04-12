// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Superman", "Batman", "Flash"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[2]);

// array methods

// myArr.push(6)
// myArr.push(7)

// myArr.pop()
// myArr.pop()
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A:", myArr);
const my1 = myArr.slice(1, 3);

console.log(my1);
console.log("B:", myArr);

const my2 = myArr.splice(1, 3);
console.log(my2);
console.log("c:", myArr);
