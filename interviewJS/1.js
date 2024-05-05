
// looping its original properties of array
Array.prototype.extraProperty = "Sameed";
const myNewArray = [1, 2, 3, 4, 5];
for (const v in myNewArray) {
   if (myNewArray.hasOwnProperty(v)) {
    console.log(v);
   }
}
