// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        // console.log(`=== Space detected ===`);
        break
    }
    // console.log(`Each char: ${greet}`);
}

// Map 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
    // console.log(typeof(`${key} :- ${value}`));
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


