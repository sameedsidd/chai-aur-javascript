// for

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   if (element == 5) {
//     console.log("5 is the best number");
//   }
//   console.log(element);
// }

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const heros = ["superman", "batman", "flash"];
// console.log(heros.length);
for (let index = 0; index < heros.length; index++) {
  const element = heros[index];
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("5 number is detected");
    break;
  }
  console.log(i);
}
