const movieDetails = document.getElementById('movie-details');
const movieTitle = document.getElementById('movie-title');
const moviePoster = document.getElementById('movie-poster');
const runtime = document.getElementById('runtime');
const showtime = document.getElementById('showtime');
const availableTickets = document.getElementById('available-tickets');
const buyTicketBtn = document.getElementById('buy-ticket-btn');
const filmsList = document.getElementById('films');

// Fetch the first movie's details
fetch('/films/1')
  .then(response => response.json())
  .then(data => {
    displayMovieDetails(data);
  });

// Fetch all movies for the menu
fetch('/films')
  .then(response => response.json())
  .then(data => {
    data.forEach(movie => {
      const li = document.createElement('li');
      li.classList.add('film', 'item');
      li.textContent = movie.title;
      li.addEventListener('click', () => {
        fetch(`/films/${movie.id}`)
          .then(response => response.json())
          .then(data => {
            displayMovieDetails(data);
          });
      });
      filmsList.appendChild(li);
    });
  });

function displayMovieDetails(movie) {
  movieTitle.textContent = movie.title;
  moviePoster.src = movie.poster;
  runtime.textContent = `Runtime: ${movie.runtime}`;
  showtime.textContent = `Showtime: ${movie.showtime}`;
  availableTickets.textContent = `Available tickets: ${movie.capacity - movie.tickets_sold}`;
  buyTicketBtn.addEventListener('click', () => {
    if (movie.tickets_sold < movie.capacity) {
      movie.tickets_sold++;
      availableTickets.textContent = `Available tickets: ${movie.capacity - movie.tickets_sold}`;
    }
  });
}