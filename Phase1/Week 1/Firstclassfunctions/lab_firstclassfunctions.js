// Takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    console.log("Calling the callback function...");
    callback();
  }
  
  // Returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is the named function.");
    };
  }
  
  // Returns an anonymous function
  function returnsAnAnonymousFunction() {
    return () => {
      console.log("This is the anonymous function.");
    };
  }
  
  // Calling the function that receives another function as an argument
  receivesAFunction(() => {
    console.log("Hello from the callback function!");
  });
  
  // Storing the function that returns a named function
  const namedFunction = returnsANamedFunction();
  namedFunction();
  
  // Storing the function that returns an anonymous function
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction();
  
  