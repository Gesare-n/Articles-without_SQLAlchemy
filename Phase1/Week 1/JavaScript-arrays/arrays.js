// Our  cats array
let cats = ["Milo", "Otis", "Garfield"];

// A method to add a cat to the array
function addCat(cat) {
 cats.push(cat);
}

// A method to remove a cat from the array
function removeCat(cat) {
 const index = cats.indexOf(cat);
 if (index !== -1) {
    cats.splice(index, 1);
 }
}

// A method to replace a cat in the array with a new one
function replaceCat(oldCat, newCat) {
 const index = cats.indexOf(oldCat);
 if (index !== -1) {
    cats[index] = newCat;
 }
}

// Test cases to validate the methods
addCat("Luna");
console.assert(cats.length === 4, "Error: AddCat function didn't add a cat.");

removeCat("Otis");
console.assert(cats.length === 3, "Error: RemoveCat function didn't remove a cat.");

replaceCat("Garfield", "Max");
console.assert(cats.includes("Max"), "Error: ReplaceCat function didn't replace a cat.");

console.log("All test cases passed.");