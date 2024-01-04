function steps(n, char = '#') {
    for (let i = 1; i <= n; i++) {
        let step = char.repeat(i);
        console.log(step);
    }
}

// Example usage
steps(2);
// Output:
// ##
// ###

steps(3);
// Output:
// ##
// ###
// ####

steps(2, '*');
// Output:
// **
// ***

steps(3, '*');
// Output:
// **
// ***
// ****