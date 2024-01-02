import { localQuotes } from "./quotes.mjs";

const quoteContainer = document.getElementById("Quote-container");
const quoteText = document.getElementById("Quote");
const authorText = document.getElementById("Author-text");
const twitterBtn = document.getElementById("Twitter");
const newQuoteBtn = document.getElementById("New-Quote");

function newQuote() {
  // Pick new Quote from Quotes.mjs
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  //   check Quote length to determine Styling
  if (quote.text.length > 60) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;

  //   Check the Author Name
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listner
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
newQuote();
