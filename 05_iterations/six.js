// const coding = ["java", "js", "python", "ruby"]
// let newCode = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(newCode);

// forEach loop don't return the value




// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNums = nums.filter( (nums) => (nums > 4) ) // implicit function indicate without (return, scope)
// console.log(newNums);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNums = nums.filter((nums) => {
//     return nums > 4 // explicit function indicate (return in scope)
// })

// console.log(newNums);

// ===============================================================
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNums = nums.filter((nums) => {
//     return nums > 4
// })
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach((myNums) => {
//     if (myNums > 4) {
//         newNums.push(myNums)
//     }
// })
// console.log(newNums);


// =============================================================================

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook = books.filter((bk)=> bk.publish > 2000)
userBook = books.filter((bk) => {
    return bk.genre === 'History'
})

userBook = books.filter((bk) =>{
   return bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBook);

















