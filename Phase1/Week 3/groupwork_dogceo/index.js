document.addEventListener('DOMContentLoaded', function () {
  // Challenge 1
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      const dogImageContainer = document.getElementById('dog-image-container');

      data.message.forEach(imgUrl => {
        const imgElement = document.createElement('img');
        imgElement.className = "image"
        imgElement.src = imgUrl;
        dogImageContainer.appendChild(imgElement);
      });
    })
    .catch(error => console.error('Error fetching dog images:', error));


  // Challenge 2
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const dogBreedsList = document.getElementById('dog-breeds');

      for (const breed in data.message) {

        const breedItem = document.createElement('li');
        breedItem.id = "listItem"

        breedItem.textContent = breed;

        dogBreedsList.appendChild(breedItem);

      }
    })
    .catch(error => console.error('Error fetching dog breeds:', error));



  // Challenge 3
  const dogBreedsList = document.getElementById('dog-breeds');

  dogBreedsList.addEventListener('click', function (event) {

    if (event.target.tagName === 'LI') {
      event.target.style.color = 'red'; 
      event.target.style.backgroundColor = 'white'; 

    }
  });

  // // Challenge 4
  const breedDropdown = document.getElementById('breed-dropdown');
  breedDropdown.addEventListener('change', function () {

    const selectedLetter = breedDropdown.value;

    const breedListItems = dogBreedsList.getElementsByTagName('li');

    for (const breedItem of breedListItems) {
      if (breedItem.textContent.startsWith(selectedLetter)) {
        breedItem.style.display = 'list-item';
      } else {
        breedItem.style.display = 'none';
      }
    }
  });
});

