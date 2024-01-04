// A higher-order function that takes an operation and returns a new function
// The returned function performs the specified operation on two numbers
const createMathFunction = function (operation) {
    return function (a, b) {
       return operation(a, b);
    };
   };
   
   // An example of a higher-order function that takes an integer and returns a function
   // The returned function multiplies a fare by the provided integer
   const receivesAFunction = function(integer) {
    return function(fare) {
       return fare * integer;
    };
   };
   
   // A function that adds two numbers
   const add = function (a, b) {
    return a + b;
   };
   
   // A function that subtracts two numbers
   const subtract = function (a, b) {
    return a - b;
   };
   
   // A function that multiplies two numbers
   const multiply = function (a, b) {
    return a * b;
   };
   
   // A function that divides two numbers
   const divide = function (a, b) {
    return a / b;
   };
   
   // An array of functions that perform math operations
   const mathOperations = [add, subtract, multiply, divide];
   
   // Example usage
   console.log(receivesAFunction(5)(20));     // Output: 100
   console.log(createMathFunction(add)(3, 4)); // Output: 7
   console.log(createMathFunction(multiply)(3, 4)); // Output: 12
   
   // Another example using the mathOperations array
   mathOperations.forEach(function (operation) {
    console.log(operation(6, 3));
   });
   // Output:
   // 9 (addition)
   // 3 (subtraction)
   // 18 (multiplication)
   // 2 (division)