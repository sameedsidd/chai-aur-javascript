// {} => scope
// var c = 300

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner Scope", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  // two()
}
// one()

if (true) {
  const username = "Sameed";
  if (username === "Sameed") {
    const website = " youtube";  
    console.log(username + website); 
  }
//   console.log(website);
}
// console.log(username);

console.log(addOne(3))
function addOne(num1) {
    return num1 + 1
}



// addTwo(2) // mini hoisting
const addTwo = function(num1) {
    return num1 + 2
}