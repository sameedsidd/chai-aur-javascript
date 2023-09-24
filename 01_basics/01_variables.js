const accountId = 19347
let accountEmail = "sameedsiddiqui9@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 3 // not allowed
accountEmail = "a@gmail.com"
accountPassword = "09876"
accountCity = "Lahore"


/*
prefer not to use var
because of issue in block scope and functional scope
*/



// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])