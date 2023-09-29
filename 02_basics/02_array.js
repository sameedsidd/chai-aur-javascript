const marvel_heros = ["Thor", "Iron Man", "Black Widow", "Hulk"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]
// const real_another_array = another_array.flat(2)
const real_another_array = another_array.flat(Infinity)


// console.log(real_another_array);
// console.log(another_array[3][0]);
// console.log(another_array.length);
// console.log(another_array[5][2][1]);


// console.log(Array.isArray("Sameed"));
// console.log(Array.from("Sameed"));
// console.log(Array.from({name: 'sameed'})); // interesting

let score = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score, score1, score2).length);
 