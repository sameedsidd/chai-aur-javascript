// singleton
// Object.create()


const mySam = Symbol("Key1")

// object literals
const JsUser = {
    name: "Sameed",
    "full name": "Sameed Siddiqui",
    age: 22,
    [mySam]: "Key1",
    location: "Karachi",
    email: "sameedsiddiqui9@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}

console.log(JsUser);
console.log(JsUser.name); // one method to access object value
console.log(JsUser["age"]); // most preferable and common way to access object value
console.log(JsUser["full name"]);

JsUser["email"] = "a@gamil.com"
// Object.freeze(JsUser) // prevent changes further in object
JsUser["email"] = "b@gamil.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello sameed");    
}


JsUser.greetingTwo = function() {
    console.log(`This is ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());










