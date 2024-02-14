document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/characters')
        .then(res => res.json())
        .then(animals => {
            animals.forEach(animal => {
                renderAnimals(animal);
            });
        });
});

function renderAnimals(animal) {
    const animalContainer = document.createElement('li');
    const animalsContainer = document.querySelector('.animals_list');

    animalContainer.textContent = animal.name;
    animalsContainer.appendChild(animalContainer);

    animalContainer.addEventListener('click', () => {
        displayAllDetails(animal);
    });
}

function displayAllDetails(animal) {
    const detailsContainer = document.querySelector(".animal_details");

    detailsContainer.innerHTML = "";

    const title = document.createElement('h2');
    title.textContent = animal.name;
    detailsContainer.appendChild(title);

    const image = document.createElement('img');
    image.src = animal.image;
    image.alt = animal.name;
    detailsContainer.appendChild(image);

    const description = document.createElement('p');
    description.textContent = animal.description;
    detailsContainer.appendChild(description);

    const numberOfVotes = document.createElement('h4');
    numberOfVotes.textContent = `Votes: ${animal.votes}`;
    detailsContainer.appendChild(numberOfVotes);

    const button = document.createElement('button');
    button.textContent = "Vote";
    detailsContainer.appendChild(button);

    button.addEventListener('click', () => {
        addVotes(animal);
        updateVoteCount(numberOfVotes, animal.votes + 1);
    });
}

function addVotes(animal) {
    // Assuming you want to update the votes on the server, make a fetch request here.
    // This is a simplified example; you may need to adjust it based on your server's API.
    fetch(`http://localhost:3000/characters/${animal.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ votes: animal.votes + 1 }),
    })
    .then(res => res.json())
    .then(updatedAnimal => {
        // Handle the response if needed
        console.log(updatedAnimal);
    })
    .catch(error => {
        console.error('Error updating votes:', error);
    });
}

function updateVoteCount(element, newVotes) {
    element.textContent = `Votes: ${newVotes}`;
}
