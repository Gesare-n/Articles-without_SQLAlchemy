function greet(user) {
    // Check if the user parameter is undefined or null, or an empty string
    if (user == null || user.trim().length === 0) {
       return 'Hello, Guest!';
    }
   
    // Return a personalized greeting using string interpolation
    return `Hello, ${user.trim()}!`;
   }
   
   // Additional test cases
   console.log(greet());          // Expected output: 'Hello, Guest!' (undefined user)
   console.log(greet(null));      // Expected output: 'Hello, Guest!' (null user)
   console.log(greet(''));        // Expected output: 'Hello, Guest!' (empty string user)
   console.log(greet('   Alice   ')); // Expected output: 'Hello, Alice!' (trimmed user)
   console.log(greet('Bob'));      // Expected output: 'Hello, Bob!' (non-empty string user)