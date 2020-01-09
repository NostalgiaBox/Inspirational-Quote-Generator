/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  { quote: "I never said that.", source: "Mark Twain", citation: "My Book", year: '1950'},
  { quote: "Live Long and Prosper", source: "Mr. Spock", citiation: "Star Trek", year: 'Stardate 4032'},
  {quote: "Yadda Yadda Yadda", source: "Jerry Seinfeld", year: "1991"}
]
console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var random = Math.floor(Math.random() * quotes.length);
  return(quotes[random ]);
}

getRandomQuote();
/***
 * `printQuote` function
***/
function printQuote(){
  var currentQuote = getRandomQuote();
  var html = ''
  var quoteDiv = document.getElementById('quote-box')
  html += '<p class="quote">' + currentQuote.quote + '</p>'
  html += '<p class="source">' + currentQuote.source 
  if ('citation' in currentQuote) {
    html += '<span class="citation">' + currentQuote.citation + '</span>'
  }
  if ('year' in currentQuote){
    html += '<span class="year">' + currentQuote.year + '</span>'
  }
  html += '</p>'
  quoteDiv.innerHTML = html
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);