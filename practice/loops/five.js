// forEach loop
const coding = ["java", "javascript", "css", "ruby", "python"]
// console.log(coding[1.0]);

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach(function name(item) {(console.log(item))})

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
// })


const myCodingLanguage = [
    {
        languageName: "JS",
        price: "$999"
    },
    {
        languageName: "Java",
        price: "$899"
    },
    {
        languageName: "Ruby",
        price: "$599"
    }
]
myCodingLanguage.forEach((item)=>{
    // console.log(item.languageName);
    // console.log(item.price);
    if (item.price >= "$500" && item.languageName == "Ruby") {
        console.log(item.languageName);
    }
})