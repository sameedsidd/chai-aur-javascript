// array and its methods

/*
push()
pop()
unshift()
shift()
includes()
slice()
splice()
join()
*/

/*
spread operator (...)
concat()
flat()
isArray()
from()
of()
*/

// const marvel_heros = ["Hulk", "Black widow", "Captain America", "Black Panther"]
// const dc_heros = ["Superman", "Batman", "Aquaman", "Wonder woman"]

// const newArray = new Array(1, 2, 3, 4, 5);
const newArray = [1, 2, 3, 4, 5]
// const newArray = new Array();
// newArray[0] = "Sameed"
// newArray[1] = "Sharjeel"
// console.log(newArray.length);

// push()
// const array_one = marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(array_one);

// pop()
// const array_o = marvel_heros.pop(dc_heros)
// console.log(marvel_heros);
// console.log(array_o);

// unshift()
// const array_one = newArray.unshift(0)
// console.log(array_one);
// console.log(newArray);

// shift()
// const array_one = newArray.shift()
// console.log(array_one);
// console.log(newArray);

// const joinArray = newArray.join()
// console.log(joinArray);

// includes and indexOf

// const array_one = newArray.includes(2)
// console.log(array_one);
// console.log(newArray);

// const array_one = newArray.indexOf(3)
// console.log(array_one);
// console.log(newArray);

// splice() and slice()

// const array_one = newArray.slice(0, 3)
// console.log(array_one);
// console.log(newArray);

// const array_two = newArray.splice(1, 3)
// console.log(array_two);
// console.log(newArray);

// ==========================================================================

const marvel_heros = ["Thor", "Hulk", "Iron man", "Black widow"]
const dc_heros = ["Superman", "Batman", "Flash", "Wonder Women"]
const guardian_of_galaxy = ["Rocket", "Nebula", "Gamora"]

// marvel_heros.push(dc_heros)
// marvel_heros.pop()
// console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros[4][1]);

// ways of merge two or more arrays

// const margeArrays = marvel_heros.concat(dc_heros, guardian_of_galaxy)
// console.log(margeArrays);

const margeArrays = [...marvel_heros, ...dc_heros, ...guardian_of_galaxy]
// console.log(margeArrays);

const another_array = [1, 2, 3, 4, 5, [6, 7], [8, [9, 10, [11, 12]]]]
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

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





























