// const tinderUser = new Object() // singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sameedsiddiqui9@gmail.com",
    fullName: {
        userName: {
            firstName: "Sameed",
            lastName: "Siddiqui"
        }
    }
}

// console.log(regularUser["fullName"]["userName"]["firstName"]);
// console.log(regularUser.fullName.userName.lastName);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const mergeObj = {obj1, obj2, obj3}
// const mergeObj = Object.assign({}, obj1, obj2, obj3)


const mergeObj = { ...obj1, ...obj2, ...obj3 }
// console.log(mergeObj);

const users = [
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

// console.log(users[1].email)
// console.log(users[2].id);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('id'));
// console.log(tinderUser.hasOwnProperty('email'));


// ==================================


const course = {
    courseName: "JS in Hindi",
    price: "$99",
    courseInstructor: "Hitesh Choudhary"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "A",
//     "courseName": "JS",
//     "price": 333
// }

[
    {},
    {},
    {}
]