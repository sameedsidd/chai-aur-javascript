const marvel_heros = ["Thor", "Iron Man", "Black Widow", "Hulk"]

const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[4][0]);

// join array -- one way with concat
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// join with spread operators


const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]];
// console.log(another_array.length);

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// console.log(real_another_array.length);


console.log(Array.from("Sameed"));
console.log(Array.isArray("Sameed"));
// console.log(Array.from({name: "Sameed"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

/*
concat()
spread operator ...
flat()
Array.from()
Array.of()
Array.isArray()
*/

