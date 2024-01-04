// Function to check if a number is prime
function isPrime(number) {
    let keepChecking = number > 1;
   
    while (keepChecking) {
       const squareRoot = Math.sqrt(number);
       const remainder = number % squareRoot;
   
       if (remainder === 0) {
         keepChecking = false;
       } else {
         number = squareRoot;
       }
    }
   
    return number === 2;
   }
   
   // Function to generate a list of prime numbers within a given range
   function generatePrimeNumbers(start, end) {
    const primeNumbers = [];
   
    for (let i = start; i <= end; i++) {
       if (isPrime(i)) {
         primeNumbers.push(i);
       }
    }
   
    return primeNumbers;
   }
   
   console.log(generatePrimeNumbers(2, 20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]