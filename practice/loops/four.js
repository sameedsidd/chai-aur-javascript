// for in loop
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key}: shortcut is for ${myObject[key]}`);
// }


const programming = ["java", "js", "python", "ruby"]

for (const key in programming) {
    //    console.log(key);
    // console.log(`${key}:   ${programming[key]}`);
}

const map = new Map()
map.set('IN', "India")
map.set('PK', "Pakistan")
map.set('FR', "France")

for (const key in map) {
   console.log(key);
}

// this map is not iterable with forin loop