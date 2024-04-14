// Immediately Invoked Function (IIFE)
// IIFE is used for removed pollution in global scope

(function chai() {
  // named IIFE
  console.log("DB CONNECTED");
})(); // semi colon must be assigned to run two iife functions



((name) => {
    // unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("sameed");
