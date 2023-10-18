// for loop
for (let i = 1; i <= 5; i++) {
    const element = i;
    if (i == 5) {
        // console.log(`5 is the best number`);
        continue
    }
    // console.log(element);
}
// console.log(element); // not access cause of scope

// =====================================================================

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop: ${j} and outer loop: ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }

}


// =========================================================================

let super_heros = ["Iron-man", "Hulk", "Thor"]
for (let index = 0; index < super_heros.length; index++) {
    const element = super_heros[index];
    // console.log(element);
    
}

// break and continue

let fullName = "Sameed Siddiqui"
// for (let index = 0; index <= fullName.length; index++) {
//     if (fullName == " ") {
//         console.log(`Space detected`);
//     }
//     console.log(fullName);
// }

// for (const name of fullName) {
//     if (name == " ") {
//         console.log(`space detected`);
//         break
//     }
//     console.log(name);
// }


for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log(`Break`);
        break
    }
    console.log(index);
    
}


for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log(`5 found`);
        continue
    }
    console.log(index);
}









