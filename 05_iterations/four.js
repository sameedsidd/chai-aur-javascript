const myObject = {
    js: 'javascript',
    html: 'hyper text markup language',
    css: 'cascading stylesheet',
}

for (const key in myObject) {
//    console.log(`${key} is shortcut => ${myObject[key]}`);
}


const programming = ['js', 'html', 'css']
for (const key in programming) {
    // console.log(`${programming[key]}`);
}



const map = new Map();
map.set("IN", "India");
map.set("Pk", "Pakistan");
map.set("CH", "China");
map.set("JP", "Japan");

for (const key in map) {
    console.log(key);
}
