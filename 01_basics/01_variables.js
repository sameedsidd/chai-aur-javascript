const accountId = 144553
let accountEmail = "sameed@google.com"
var accountPassword = "112233"
accountCity = "Karachi"

// accountId = 11111 // not allowed


/*
Prefer not to use var 
because of issue in block and functional scope
*/

accountEmail = "ss@google.com"
accountPassword = "12345"
accountCity = "Lahore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);