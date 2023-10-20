// const tinderUser = new Object(); singleton

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser);

const regularUser = {
  email: "sameedsiddiqui9@gmail.com",
  fullName: {
    userName: {
      firstName: "Sameed",
      lastName: "Siddiqui",
    },
  },
};

// console.log(regularUser["fullName"]["userName"]["firstName"]);

// console.log(regularUser.fullName.userName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const mergeObj = {obj1, obj2, obj3}
// console.log(mergeObj);

// const mergeObj = Object.assign({}, obj1, obj2, obj3)
// console.log(mergeObj);

const mergeObj = { ...obj1, ...obj2, ...obj3 };
// console.log(mergeObj);

const user = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "b@gmail.com",
  },
];
// user.forEach((item)=>{
//     console.log(item.id);
// })
// const sumValue = user.reduce((acc, item) => {
//   return acc + item.id;
// }, 0);

// console.log(sumValue);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));
// console.log(tinderUser.hasOwnProperty('email'));
// console.log(tinderUser.hasOwnProperty('name'));


// ========================================================

const course = {
    courseName: "js in hindi",
    price: "$99",
    courseInstructor: "Hitesh Choudary"
}

// console.log(course.courseInstructor);
// destructure object


// const {price: p} = course
// console.log(p);

// {
//     "name": "A",
//     "courseName": "JS",
//     "price": 333,
// }

// [
//     {},
//     {},
//     {}
// ]
