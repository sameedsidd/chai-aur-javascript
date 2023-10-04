// arrays and its methods
// const myArr = [1, 2, 3, 4, 5, "Black", 6, 7, 8, 9]
const my_heros = ["Hulk", "Black widow", "Captain America"]

const my_arr2 = new Array(1, 2, 3, 4, 5);
// console.log(my_arr2[1]);

// push()
// const array_one = myArr.push(10)
// console.log(myArr);
// console.log(array_one);

// pop()
// const array_one = myArr.pop()
// console.log(myArr);
// console.log(array_one);

// unshift()
// const array_one = myArr.unshift(0)
// console.log(myArr);
// console.log(array_one);

// shift()
// const array_one = myArr.shift()
// console.log(myArr);
// console.log(array_one);

// includes and indexOf
// const array_one = myArr.includes(3)
// console.log(array_one);
// console.log(myArr);

// const array_two = myArr.indexOf("Black")
// console.log(array_two);

// slice and splice
const myArr = [1, 2, 3, 4, 5, "Black", 6, 7, 8, 9]

const array_two = myArr.slice(1, 3)
// console.log(myArr);
// console.log(array_two);

// console.log("===================================");

const array_one = myArr.splice(1, 3)
// console.log(myArr);
// console.log(array_one);


const newArray = myArr.join()
// console.log(newArray);

/*
Array methods

push()  ==> add new value in last and return new length of an array
pop()   ==> remove last value and return it
unshift() ==> add new value in the first and return new length of an array
shift() ==> remove value in the start and return it
includes() ==> return true and false
indexOf() ==> find index of value
slice() 
splice()
join()
*/

console.log("=======================================================");

const marvel_heros = ["Thor", "Hulk", "Iron man", "Black widow"]
const dc_heros = ["Superman", "Batman", "Flash", "Wonder Women"]
const guardian_of_galaxy = ["Rocket", "Nebula", "Gamora"]

// marvel_heros.push(dc_heros)
// marvel_heros.pop(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros[4][1]);

// ways of merge two arrays

const marge_two_arrays = marvel_heros.concat(dc_heros)
// console.log(marge_two_arrays); 

// spread operators
const margeThreeArray = [...marvel_heros, ...dc_heros, ...guardian_of_galaxy]
// console.log(margeThreeArray);

const another_array = [1, 2, 3, 4, 5, [6, 7, [8, 9, 10]]]
// console.log(another_array.length);
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

/*
spread operator ==> ...marvel_heros, ...dc_heros ===> joins arrays
concat() ==> joins two arrays
flat() ==> joins all in arrays in depth
isArray() ==> check that value is array or not true/false
from() ==> create an array from iterable object 
of() ==> Returns a new array from a set of elements.
*/

// console.log(Array.isArray(marvel_heros));
// console.log(Array.isArray("Sameed"));

// console.log(Array.from("Sameed"));
// console.log(Array.from({name: "Sameed"})); // interesting talk about it later

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));






















console.log("=======================================================");