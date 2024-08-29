const quotes = [];

// get elements
const text = document.getElementById('quote');
const button = document.getElementById('generate-btn');

// random function
function randomQuote() {
    
    if (quotes.length === 0) {
        text.textContent = 'No quotes available';
        return;
    }

    let random = Math.floor(Math.random() * quotes.length);
    // set quote text to the randomly selected one
    text.textContent = quotes[random];
}

// event listener
button.addEventListener('click', randomQuote);