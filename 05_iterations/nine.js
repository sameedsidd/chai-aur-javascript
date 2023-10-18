// reduce() method

// const myNums = [1, 2, 3, 4, 5]
// const myTotal = myNums.reduce(function (acc, currVal) {
//     return acc + currVal
// },0)
// console.log(myTotal);

// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
// console.log(myTotal);

// const myTotal = myNums.reduce((acc, currVal) => (acc + currVal), 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 1999
    },
    {
        itemName: 'mobile dev course',
        price: 9999
    },
    {
        itemName: 'java course',
        price: 3999
    },
    {
        itemName: 'py course',
        price: 999
    }
]

const priceToPay = shoppingCart
                    // .filter((item)=>(item.price === 999))
                    .reduce((acc, item) => (acc + item.price), 0)
                
console.log(priceToPay);

