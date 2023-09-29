// arrays
const myArr = [1, 2, 3, 4, 5]
const heros = ["Iron Man", "Thor", "Black Widow", "Hulk"]

// console.log(myArr);
// console.log(myArr[2]);

// console.log(heros);
// console.log(heros[2]);

// * array methods
/*
push()
pop()
unshift()
shift()
includes()
indexOf()
join()
*/ 
// myArr.push(6) // add new value to the end
// myArr.push(7)

// myArr.pop() // remove value from the end
// myArr.pop()

// myArr.unshift(0) // add new value at start
// myArr.shift() // remove value from the start
// myArr.shift() // remove value from the start

// console.log(myArr);
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(10));

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// slice() or splice()

console.log("A ", myArr);

const myNewArray1 = myArr.slice(1, 3) 
console.log(myNewArray1);
console.log("B ", myArr);

const myNewArray2 = myArr.splice(1, 3)

console.log(myNewArray2);
console.log("C ", myArr);



