// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((item) => {
//   return item + 10;
// });
// console.log(typeof newNums);

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);

// console.log(newNums);

//   map()
//   filter()
//   reduce()

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc, curVal) {
//     console.log(`acc ${acc} and curVal ${curVal}`);
//     return acc + curVal
// }, 0)

// const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Js course",
    price: 299,
  },
  {
    itemName: "html course",
    price: 399,
  },
];

//   const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

//   console.log(priceToPay);

const priceToPay = shoppingCart.reduce((acc, item) => {
  console.log(`acc ${acc} and price ${item.price}`);

  return acc + item.price;
}, 0);

console.log(priceToPay);
