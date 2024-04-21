const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, curVal) {
//     console.log(`acc ${acc} and curVal ${curVal}`);
//     return acc + curVal;
// }, 0);

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

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);