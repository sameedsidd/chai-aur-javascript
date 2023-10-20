// variables var, let and const
const accountId = 19347
let accountEmail = "sameedsiddiqui9@gmail.com"
var accountPassword = 12345
accountCity = "Karachi"
let accountState;

// accountId = 098765 // const never declared
accountEmail = "a@gmail.com"
accountPassword = 11223344
accountCity = "Lahore"


/*
prefer not use var cause of scope
*/


// console.log(accountState);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])