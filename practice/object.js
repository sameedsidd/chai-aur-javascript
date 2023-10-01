// singleton
// Object.create()

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Sameed",
    "Full Name": "Sameed Siddiqui",
    age: 22,
    location: "Karachi",
    email: "sameedsiddiqui9@gmail.com",
    ["mySym"]: "mykey1",
    isLoggedIn: true,
    lastLoggedDate: ["Monday", "Tuesday"]
}

// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["Full Name"]); 
// console.log(JsUser["mySym"]);
// console.log(Object.keys(JsUser).length);

JsUser.email = "a@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.name = "Hafsa"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function () {
    console.log("Hello Js User two");
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//  ============================================
console.log("============================================");

// const tinder_user = new Object()

const tinder_user = {}
tinder_user.id = 12345
tinder_user.name = "Sameed Siddiqui"
tinder_user.email = "a@gmail.com"
tinder_user["isLoggedIn"] = true

// console.log(tinder_user);

const regular_user = {
    id: 1289,
    fullName: {
        userName: {
            firstName: "Sameed",
            lastName: "Siddiqui"
        }
    },
    email: "b@gmail.com",
    isLoggedIn: false
}

// console.log(regular_user.fullName.userName.firstName);
// console.log(regular_user["fullName"]["userName"]["lastName"]);

// ways of join two or more objects



const obj1 = { 1: "1", 2: "Hafsa" }
const obj2 = { 3: "2", 4: "Nimra" }
const obj3 = { 5: "3", 6: "Shalin" }

// const joinObjects = Object.assign({}, obj1, obj2, obj3)
// console.log(joinObjects);

// const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4);

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]
// console.log(user[1].email);

// console.log(tinder_user);
// console.log(Object.keys(tinder_user));
// console.log(Object.values(tinder_user));
// console.log(Object.entries(tinder_user));
// console.log(tinder_user.hasOwnProperty("isLogged"));

// de-structure of object

const course = {
    courseName: "JS",
    price: 122,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);
// console.log(course["courseInstructor"]);

const {courseInstructor: Instructor} = course // de-structuring
console.log(Instructor);

// JSON syntax

// {
//     "name": "hitesh",
//     "coursname": "JS",
//     "price": 99
// }

// [
//     {},
//     {},
//     {}
// ]
























console.log("============================================");