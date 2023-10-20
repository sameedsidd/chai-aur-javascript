// reduce method
// const myNumbers = [1, 2, 3, 4, 5]
// const myTotal = myNumbers.reduce((acc, currVal) => {
//     return acc + currVal
// }, 0)
// console.log(myTotal);

// const myNumbers = [1, 2, 3, 4, 5]
// const initialValue = 0
// const total = myNumbers.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} currVal: ${currVal}`);
//     return acc + currVal
// }, initialValue)

// const total = myNumbers.reduce((acc, currVal) => acc + currVal, initialValue);
// console.log(total);


const shoppingCart = [
    {
        itemName: "Js",
        price: 999
    },
    {
        itemName: "Py",
        price: 599
    },
    {
        itemName: "Java",
        price: 799
    }
]

const totalNetValue = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(totalNetValue);

