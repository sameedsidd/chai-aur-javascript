// singleton
// Object.create()

// object literals

const JsUser = {
    name: "Sameed",
    age: 22,
    location: "Karachi",
    "full name": "Sameed Siddiqui",
    email: "sameedsiddiqui@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}

// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// Object.freeze(JsUser)
// JsUser["email"] = "c@gmail.com"
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello sameed");   
}

JsUser.greetingTwo = function () {
    console.log(`this is ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());