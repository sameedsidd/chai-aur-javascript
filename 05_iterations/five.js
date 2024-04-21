// const coding = ["js", "cpp", "java", "swift"];
// coding.forEach(function(val) {
//     console.log(val);
// })

// coding.forEach((val) => {
//     console.log(val);
// });
debugger;
const coding = ["js", "cpp", "java", "swift"];

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "ruby",
    languageFile: "rb",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
