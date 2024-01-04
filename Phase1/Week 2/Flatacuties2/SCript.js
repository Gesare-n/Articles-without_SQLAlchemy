// Function to update votes on the server and the DOM
function updateAnimalVotes(cardId, votes) {
    // Update the votes for the clicked animal on the server
    fetch('/api/update-votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cardId: cardId,
            votes: votes
        })
    })
    .then(response => response.json())
    .then(data => {
        // Update the DOM elements with the new vote count
        document.getElementById(`vote-count-${cardId}`).textContent = `${data.votes}`;
    })
    .catch(error => {
        console.error('Error updating votes:', error);
    });
}

// Function to increment the vote count for a specific card
function incrementVoteCount(cardId) {
    // Get the current vote count from the DOM element
    let currentVoteCount = parseInt(document.getElementById(`vote-count-${cardId}`).textContent);

    // Increment the vote count by 1
    let newVoteCount = currentVoteCount + 1;

    // Update the vote count on the server and the DOM element
    updateAnimalVotes(cardId, newVoteCount);
}

// Function to handle vote button clicks
function handleVoteClick(event) {
    // Get the clicked vote button index
    let voteButtonIndex = Array.from(event.target.parentNode.children).indexOf(event.target);

    // Update the vote count for the clicked vote button index
    incrementVoteCount(`vote-btn-${voteButtonIndex + 1}`);
}

// Add event listeners for each vote button
for (let i = 1; i <= 2; i++) {
    let cardId = `vote-btn-${i}`;
    document.getElementById(cardId).addEventListener('click', handleVoteClick);
}