// +++++++++++++++ variables +++++++++++++ //
// var, let and const

console.log("=============== Result =================");
const accountId = 1288479
let accountEmail = "a@google.com"
var accountPassword = "232323"
let accountState;
accountCity = "Karachi"

// accountId = "19347" // not allowed to reassign constant variable
accountEmail = "b@gmail.com"
accountPassword = "131313"
accountCity = "Lahore"


/*
prefer not to use var
because of issue in block scope and functional scope
*/

// console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountState, accountCity])
console.log("========================================");