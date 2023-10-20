const coding = ["css", "html", "java", "python"]
const newLang = coding.forEach((item) => {
    return
})
// console.log(newLang);

// forEach cannot return any value

// filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter((num) => {
    return num > 5
})
// console.log(newNums);

// another way
const newNum2 = []
myNums.forEach((num) => {
    if (num > 5) {
        newNum2.push(num)
    }
})

// console.log(newNum2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'History', publish: 1981, edition: 1989 },
];

// let myBooks = books.filter((bk) => {
//     return bk.publish >= 1980 && bk.genre === "History"
// })
// console.log(myBooks);

let myBooks = books.filter((bk) => (bk.title === "Book Eight"))
console.log(myBooks);