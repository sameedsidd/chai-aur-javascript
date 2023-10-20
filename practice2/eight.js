// const myArr = [1, 2, 3, 4, 5];
const heros = ["hulk", "iron-man", "spider-man", "black widow"]

// console.log(myArr);
// console.log(myArr[3]); 
// console.log(typeof myArr[3]); // number



// console.log(heros);
// console.log(heros[3]); 
// console.log(typeof heros[3]); // string

/*
push()
pop()
unshift()
shift()
includes()
join()
indexOf()
slice()
splice()
*/

const myArr = [1, 2, 3, 4, 5];

// push()
// const pushValue = myArr.push(6)
// console.log(myArr);
// console.log(pushValue);

// pop()
// const  popValue = myArr.pop()
// console.log(myArr);
// console.log(popValue);

// unshift()
// const unshiftValue = myArr.unshift(0)
// console.log(myArr);
// console.log(unshiftValue);

// shift()
// const shiftValue = myArr.shift()
// console.log(myArr);
// console.log(shiftValue);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

console.log("A: ", myArr);

const sliceValue = myArr.slice(1, 3)
console.log(sliceValue);

console.log("B: ", myArr);

const spliceValue = myArr.splice(1, 3, "Feb")
console.log(spliceValue);

console.log("C: ", myArr);