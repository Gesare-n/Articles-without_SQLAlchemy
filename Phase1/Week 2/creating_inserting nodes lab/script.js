// Step 1: Create a new div element
const divElement = document.createElement("div");

// Step 2: Create ul and li elements
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Step 3: Append ul to the div
divElement.append(ul);

// Step 4: Change background color of the div
divElement.style.backgroundColor = "#27647B";

// Step 5: Remove the second li element from the ul
const secondLi = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondLi);

// Step 6: Set the text content of the div
const name = "NICOLE";
divElement.textContent = `${nicole} is the champion`;

// Step 7: Append the div to the body
document.body.append(divElement);
