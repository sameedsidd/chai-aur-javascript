// IIFE
(function chai(name) {
    // named iife
    console.log(`DB CONNECTED ${name}`);
})("Sameed");


// (IIFE) function execute immediately
// sometimes global scope has raise the pollution. to avoid this global scope variable pollution we use (IIFE)

((name) => {
    // unnamed IIFE
    console.log(`db connected ${name}`);
})("Sameed");
