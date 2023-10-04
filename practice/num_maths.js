// numbers

// let score = 100
// let convertIntoString = String(score)
// console.log(convertIntoString);
// console.log(typeof convertIntoString );
// console.log(score);

/*
toString()
toFixed()
toPrecision()
*/

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toExponential(5));
// console.log(balance.toPrecision(4));
// console.log(balance.toFixed(2));
// console.log(typeof(balance.toString()));
// console.log(typeof(score.toString()));



const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-PK'));


// maths operations

/*
Math.ceil()
Math.floor()
Math.round()
Math.abs()
Math.min()
Math.max()
Math.random()
*/

// console.log(Math.abs(-5));
// console.log(Math.round(2.5));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(3.4));
// console.log(Math.sqrt(16));
// console.log(Math.min(3,4,53, 0));
// console.log(Math.max(12,100,3454));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ((max - min) + 1)) + min);