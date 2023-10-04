console.log("====================================================");
// singleton

// Object.create()

// object literals

const mySymbol = Symbol("KeyOne")
const JsUser = {
    name: "Sameed",
    "full name": "Sameed Siddiqui",
    age: 22,
    location: "Karachi",
    ["mySymbol"]: "KeyOne",
    isLoggedIn: true,
    lastLoggedDate: ["Monday", "Tuesday"]
}

// console.log(JsUser["full name"]);
// console.log(JsUser.name);
// console.log(JsUser["mySymbol"]);
// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(Object.entries(JsUser));


// change value of object keys
JsUser.age = 23
// console.log(JsUser.age);
// Object.freeze(JsUser)

// functions with object

JsUser.greeting = function(){
    console.log("Hello Sam");
}

JsUser.greetingOne = function(){
    console.log("Hi rumi");
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingOne());

// *======================================================* //
// const tinder_user = new Object()

const tinder_user = {}
tinder_user.id = 123
tinder_user.name = "Hafsa"
tinder_user.email = "c@gmail.com"
tinder_user["isLoggedIn"] = true

// console.log(tinder_user);


const regular_user = {
    fullname: {
        username: {
            firstname: "Sameed",
            lastname: "Siddiqui"
        }
    },
    email: "b@gmail.com",
    isLoggedIn: false
}

// console.log(regular_user.fullname.username.lastname);
// console.log(regular_user["fullname"]["username"]["firstname"]);

// ways of join objects

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj3 = {5:"a", 6: "b"}

// const joinObjects = Object.assign({}, obj1, obj2, obj3)
// console.log(joinObjects);


const joinObjects = {...obj1, ...obj2, ...obj3}
// console.log(joinObjects);

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
// console.log(tinder_user.hasOwnProperty("isLogged"));
// de-structure of an array

const course = {
    courseName: "JS",
    price: 1000,
    instructorName: "Hitesh Choudary"
}

// console.log(course.instructorName);
// console.log(course["courseName"]);


const {instructorName: Instructor} = course
// console.log(Instructor);

// JSON syntax
// {
//     "name": "hitesh",
//     "coursename": "JS",
//     "price":99
// }

// [
//     {},
//     {},
//     {}
// ]









































console.log("====================================================");





