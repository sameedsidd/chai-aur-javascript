// const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sameed";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Sameed",
      lastName: "Siddiqui",
    },
  },
};

// console.log(regularUser["fullName"]["userFullName"]["firstName"]);
// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = { ...obj1, ...obj2, ...obj4 };

// console.log(obj3);

const users = [
  {
    id: 1,
    name: "Sameed",
  },
  {
    id: 2,
    name: "Adnan",
  },
];

// console.log(users[0].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "Js in Hindi",
  price: "$99",
  courseInstructor: "Histesh Choudhary",
};

// console.log(course.courseName);
// console.log(course.price);

const {courseInstructor: instructor} = course
// console.log(courseInstructure);
console.log(instructor);

// API => apna kaam kisi or ke sar par daal dena

// {
//     "name": "Sameed",
//     "age": "23", 
//     "email": "a@gmail.com"
// }

// [
//     {},
//     {},
//     {}
// ]