import { localQuotes } from "./quotes.mjs";

const quoteContainer = document.getElementById("Quote-container");
const quoteText = document.getElementById("Quote");
const authorText = document.getElementById("Author-text");
const twitterBtn = document.getElementById("Twitter");
const newQuoteBtn = document.getElementById("New-Quote");

function newQuote() {
  // Pick new Quote from Quotes.mjs
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}

// Output
newQuote();
