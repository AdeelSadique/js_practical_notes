// iife stand for immediate invoke function expression
// it is used to invoke immediate function
// like if we have some global vars and we want to avoid global polutions

(function test() {
  console.log(`DB is connected`);
})();
// () is caller
// ; is used to terminate the 1st function

// arrow function with arguments
((name) => {
  console.log(`DB is connected with ${name}`);
})('localhost');
