// Immediately Invoked Function Expression (IIFE)
(function chai(params) {
    // named IIFE
    console.log("DB CONNECTED");
})();
// (IIFE) function execute immediately
// sometimes global scope has raise the pollution. To avoid this global scope variable pollution we use (IIFE)

( (name) => {
    // unnamed IIFE
    console.log(`db connected ${name}`);
})("Sameed")