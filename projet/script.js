const quotes = ['The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela', 'The way to get started is to quit talking and begin doing. - Walt Disney', 'Your time is limited, so don\'t waste it living someone else\'s life. - Steve Jobs', 'If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt', 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success. - James Cameron', 'Life is what happens when you\'re busy making other plans. - John Lennon', 'Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa', 'When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt', 'Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead', 'Don\'t judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson'];

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