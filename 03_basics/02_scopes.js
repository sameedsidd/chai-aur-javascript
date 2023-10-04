// var b = 200
let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30

    // console.log("Inner scope:", a);
}

// console.log("Outer scope:", a);
// console.log(b);
// console.log(c);

// ======================================================
function one() {
    const username = "Sameed"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if (true) {
    const username = "Sameed"
    if (username === "Sameed") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// **************************** Interesting =================================



console.log(addOne(5))
function addOne(num) {
    return num + 1
}



addTwo(7)  // Cannot access 'addTwo' before initialization (hoisting)
const addTwo = function (num) { // function expression is all about variable hold a function
    return num + 2
}











