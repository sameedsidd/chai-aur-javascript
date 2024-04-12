// singleton
// Object.create()

// Object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Sameed Siddiqui",
  age: 23,
  [mySym]: "key1",
  location: "Karachi",
  email: "a@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Sunday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]); // recommended to call
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "b@gmail.com";

// console.log(JsUser);
// Object.freeze(JsUser)

JsUser.name = "Hafsa";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log(`Hello world!`);
};

JsUser.greetingTwo = function () {
  console.log(`Hi, ${this.name}`);
};



console.log(JsUser.greeting());
