const marvel_heros = ["ironman", "thor", "black window"];
const dc_heros = ["superman", "batman", "flash"];
const dd = [1, 2, 3, 4, 5];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros, ...dd];
// console.log(all_new_heros);

// const another_array = [1, 2, 3, 4, [6, 7, [8, [9, 10]]]];
// const real_another_array =  another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Sameed"));
// console.log(Array.from("Sameed"));
// console.log(Array.from.({name: "Sameed"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
