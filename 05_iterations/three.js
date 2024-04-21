// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
  //   console.log(greet);
  //   if (greet == " ") {
  // continue;
  //   }
}

// Map => is a object that holds key and values and remember sequence of order

const map = new Map();
map.set("IN", "India");
map.set("Pk", "Pakistan");
map.set("CH", "China");
map.set("JP", "Japan");
// map.set('CH', "China") // not duplicate values or repeat

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//     console.log(key, value);
// } // not working for object